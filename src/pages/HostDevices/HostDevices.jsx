import { Table, Card, Button, Tag, Spin, Alert } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useHostDevices from "../../service/HostDevices";

const HostDevices = () => {
  const navigate = useNavigate();
  const { devices, loading, error, pagination, refresh, fetchPage } =
    useHostDevices();

  const getStatusColor = (status) => {
    switch (status) {
      case "Offline":
        return "red";
      case "Online":
        return "green";
      default:
        return "default";
    }
  };

  const handleRowClick = (record) => {
    navigate(`/devices/${record.id}`);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <span className="monospace">{id.substring(0, 8)}...</span>
      ),
    },
    {
      title: "Host Name",
      dataIndex: "host_name",
      key: "host_name",
    },
    {
      title: "IP Address",
      dataIndex: "ip_address",
      key: "ip_address",
      render: (ip) => <span className="monospace">{ip}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "OS Version",
      dataIndex: "os_version",
      key: "os_version",
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Card
        title="Host Devices"
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
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            style={{ marginBottom: "16px" }}
          />
        )}

        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => fetchPage(pagination.previous)}
            disabled={!pagination.previous || loading}
          >
            Previous
          </Button>
          <span style={{ lineHeight: "32px" }}>
            Page {pagination.currentPage} of {Math.ceil(pagination.count / 10)}
          </span>
          <Button
            onClick={() => fetchPage(pagination.next)}
            disabled={!pagination.next || loading}
          >
            Next
          </Button>
        </div>

        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={devices.map((item) => ({ ...item, key: item.id }))}
            pagination={false}
            scroll={{ x: 1000 }}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
            }}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
              style: { cursor: "pointer" },
            })}
          />
        </Spin>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <p>Total devices: {pagination.count}</p>
        </div>
      </Card>
    </div>
  );
};

export default HostDevices;
