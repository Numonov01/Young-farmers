// src/pages/Firewall/FireWall.jsx
import { Table, Card, Button, Tag, Spin, Alert } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import useFirewallRules from "../../service/FireWallRules";

const FireWall = () => {
  const { id } = useParams();
  const { rules, loading, error, pagination, refresh, fetchPage } =
    useFirewallRules();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getActionColor = (action) => {
    switch (action) {
      case "BLOCK":
        return "red";
      case "ALLOW":
        return "green";
      default:
        return "default";
    }
  };

  const getDirectionColor = (direction) => {
    switch (direction) {
      case "INBOUND":
        return "blue";
      case "OUTBOUND":
        return "orange";
      default:
        return "default";
    }
  };

  const columns = [
    {
      title: "№",
      key: "index",
      width: 60,
      render: (_, __, index) => (pagination.currentPage - 1) * 10 + index + 1,
    },
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   key: "id",
    //   width: 100,
    //   render: (id) => (
    //     <span className="monospace">{id.substring(0, 8)}...</span>
    //   ),
    // },
    {
      title: "Protocol",
      dataIndex: "protocol",
      key: "protocol",
      render: (protocol) => <Tag color="geekblue">{protocol}</Tag>,
    },
    {
      title: "Host",
      dataIndex: "host",
      key: "host",
      render: (host) => host || "null",
    },
    {
      title: "Port",
      dataIndex: "port",
      key: "port",
      align: "center",
    },

    {
      title: "Direction",
      dataIndex: "direction",
      key: "direction",
      render: (direction) => (
        <Tag color={getDirectionColor(direction)}>{direction}</Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (action) => <Tag color={getActionColor(action)}>{action}</Tag>,
    },

    {
      title: "Application",
      dataIndex: "application",
      key: "application",
      render: (app) => app || "null",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => formatDate(date),
    },
    // {
    //   title: "Updated At",
    //   dataIndex: "updated_at",
    //   key: "updated_at",
    //   render: (date) => formatDate(date),
    // },
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
            dataSource={rules.map((item) => ({ ...item, key: item.id }))}
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

export default FireWall;
