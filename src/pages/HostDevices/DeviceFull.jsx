// src/pages/HostDevices/DeviceFull.jsx
import {
  Card,
  Button,
  Tag,
  Spin,
  Alert,
  Descriptions,
  Row,
  Col,
  Table,
} from "antd";
import { ReloadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import useDeviceFullInfo from "../../service/DeviceFullInfo";
import useHostApplications from "../../service/HostApplications";
import { useState } from "react";

const DeviceFullInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { device, loading, error, refresh } = useDeviceFullInfo(id);
  const {
    app: applications,
    loading: appsLoading,
    error: appsError,
    refresh: refreshApps,
  } = useHostApplications(id);

  const [showApplications, setShowApplications] = useState(false);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Offline":
        return "red";
      case "Online":
        return "green";
      case "running":
        return "green";
      case "stopped":
        return "red";
      default:
        return "default";
    }
  };

  const handleBack = () => {
    navigate("/devices");
  };

  const handleShowApplications = () => {
    setShowApplications(true);
    refreshApps();
  };

  const handleHideApplications = () => {
    setShowApplications(false);
  };

  // Define columns for the applications table
  const applicationColumns = [
    {
      title: "№",
      key: "index",
      width: 60,
      render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
    },
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   key: "id",
    // },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PID",
      dataIndex: "pid",
      key: "pid",
    },
    {
      title: "Sent",
      dataIndex: "sent",
      key: "sent",
    },
    {
      title: "Received",
      dataIndex: "received",
      key: "received",
    },
  ];

  if (loading) {
    return (
      <div
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "24px" }}>
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: "16px" }}
        />
        <Button onClick={handleBack} icon={<ArrowLeftOutlined />}>
          Back to devices
        </Button>
      </div>
    );
  }

  if (!device) {
    return (
      <div style={{ padding: "24px" }}>
        <Alert message="Device not found" type="warning" showIcon />
        <Button
          onClick={handleBack}
          icon={<ArrowLeftOutlined />}
          style={{ marginTop: "16px" }}
        >
          Back to devices
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={handleBack}
              style={{ marginRight: "16px" }}
            >
              Back
            </Button>
            <span>Device id:</span>
            {id && (
              <Tag color="purple" style={{ marginLeft: "10px" }}>
                {id}
              </Tag>
            )}
          </div>
        }
        extra={
          <Button
            icon={<ReloadOutlined />}
            onClick={refresh}
            disabled={loading}
            type="primary"
          >
            Refresh
          </Button>
        }
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Descriptions title="Device full information" bordered column={2}>
          <Descriptions.Item label="ID" span={2}>
            <span className="monospace">{device.id}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Host Name">
            {device.host_name}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={getStatusColor(device.status)}>{device.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="IP Address">
            <span className="monospace">{device.ip_address}</span>
          </Descriptions.Item>
          <Descriptions.Item label="OS Version">
            {device.os_version}
          </Descriptions.Item>
          <Descriptions.Item label="BIOS UUID">
            <span className="monospace">{device.bios_uuid}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Last Seen">
            {formatDate(device.last_seen)}
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {formatDate(device.created_at)}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At">
            {formatDate(device.updated_at)}
          </Descriptions.Item>
        </Descriptions>

        <Row gutter={16} style={{ marginTop: "24px" }}>
          <Col span={24}>
            <Card
              title="Host applications"
              size="small"
              extra={
                showApplications ? (
                  <div>
                    <Button
                      icon={<ReloadOutlined />}
                      onClick={refreshApps}
                      disabled={appsLoading}
                      size="small"
                      style={{ marginRight: "8px" }}
                    >
                      Refresh Applications
                    </Button>
                    <Button size="small" onClick={handleHideApplications}>
                      Hide
                    </Button>
                  </div>
                ) : null
              }
            >
              {!showApplications ? (
                <Button type="primary" onClick={handleShowApplications}>
                  Show Host Applications
                </Button>
              ) : (
                <div>
                  {appsLoading ? (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                      <Spin size="small" />
                    </div>
                  ) : appsError ? (
                    <Alert
                      message="Error loading applications"
                      description={appsError}
                      type="error"
                      size="small"
                      style={{ marginBottom: "8px" }}
                    />
                  ) : (
                    <Table
                      size="small"
                      columns={applicationColumns}
                      dataSource={applications?.results || []}
                      rowKey="id"
                      pagination={{
                        pageSize,
                        current: currentPage,
                        onChange: (page) => setCurrentPage(page),
                      }}
                      scroll={{ x: true }}
                      onRow={(record) => {
                        return {
                          onClick: () => {
                            navigate(`/connections/${record.id}`);
                          },
                          style: {
                            cursor: "pointer",
                          },
                        };
                      }}
                    />
                  )}
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DeviceFullInfo;
