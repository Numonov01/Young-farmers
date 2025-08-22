import { Table, Card, Button, Tag, Spin, Alert } from "antd";
import { ReloadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import useApplicationConnections from "../../service/ApplicationConnections";

const ApplicationConnections = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { connections, loading, error, pagination, refresh, fetchPage } =
    useApplicationConnections(id);

  const handleBack = () => {
    navigate(-1);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Local Address",
      dataIndex: "local_address",
      key: "local_address",
      render: (address) => address || "N/A",
    },
    {
      title: "Remote Address",
      dataIndex: "remote_address",
      key: "remote_address",
      render: (address) => address || "N/A",
    },
  ];

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
            <span>Application id:</span>
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
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            style={{ marginBottom: "16px" }}
          />
        )}

        {/* Pagination controls */}
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => fetchPage(pagination.previous)}
            disabled={!pagination.previous || loading}
          >
            Previous
          </Button>
          <span style={{ lineHeight: "32px" }}>
            Page {pagination.currentPage} of{" "}
            {pagination.count > 0 ? Math.ceil(pagination.count / 10) : 1}
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
            dataSource={connections.map((item, index) => ({
              ...item,
              key: item.id || `connection-${index}`,
            }))}
            pagination={false}
            scroll={{ x: 800 }}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
            }}
            expandable={{
              expandedRowRender: (record) => (
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    margin: 0,
                    fontSize: "12px",
                  }}
                >
                  {record.more_info
                    ? JSON.stringify(record.more_info, null, 2)
                    : "No additional information available"}
                </pre>
              ),
              rowExpandable: (record) =>
                record.more_info !== null && record.more_info !== undefined,
            }}
            locale={{
              emptyText: loading
                ? "Loading..."
                : "No connection data available",
            }}
          />
        </Spin>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <p>Total connections: {pagination.count}</p>
        </div>
      </Card>
    </div>
  );
};

export default ApplicationConnections;
