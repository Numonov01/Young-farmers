// src/pages/Applications/Applications.jsx
import { Table, Card, Button, Tag, Spin, Alert } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import useApplications from "../../service/Applications";

const Applications = () => {
  const { id } = useParams();
  const { apps, loading, error, pagination, refresh, fetchPage } =
    useApplications();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return "green";
      case "stopped":
        return "red";
      default:
        return "default";
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (id) => (
        <span className="monospace">{id.substring(0, 8)}...</span>
      ),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => formatDate(date),
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (date) => formatDate(date),
    },
    {
      title: "Image path",
      dataIndex: "image_path",
      key: "image_path",
    },
    {
      title: "Pid",
      dataIndex: "pid",
      key: "pid",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hash",
      dataIndex: "hash",
      key: "hash",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "Host",
      dataIndex: "host",
      key: "host",
      render: (id) => (
        <span className="monospace">{id.substring(0, 8)}...</span>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Firewall Rules</span>
            {id && (
              <Tag color="purple" style={{ marginLeft: "10px" }}>
                Device: {id}
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
            dataSource={apps.map((item) => ({ ...item, key: item.id }))}
            pagination={false}
            scroll={{ x: 1000 }}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
            }}
          />
        </Spin>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <p>Total Rules: {pagination.count}</p>
        </div>
      </Card>
    </div>
  );
};

export default Applications;
