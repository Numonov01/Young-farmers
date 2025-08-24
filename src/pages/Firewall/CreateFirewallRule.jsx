// src/pages/Firewall/CreateFirewallRule.jsx
import { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  message,
  Alert,
  Spin,
  Row,
  Col,
} from "antd";
import { SaveOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useFirewallRules from "../../service/FireWallRules";

const { Option } = Select;

const CreateFirewallRule = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hosts, setHosts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [hostsLoading, setHostsLoading] = useState(true);
  const [appsLoading, setAppsLoading] = useState(false);
  const [selectedHost, setSelectedHost] = useState(null);

  const { createRule } = useFirewallRules();

  // Fetch hosts on component mount
  useEffect(() => {
    const fetchHosts = async () => {
      try {
        setHostsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}hosts/devices/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHosts(data.results);
      } catch (err) {
        setError("Failed to load hosts: " + err.message);
      } finally {
        setHostsLoading(false);
      }
    };

    fetchHosts();
  }, []);

  // ko'p hashlardan bittasni chiqatish
  const removeDuplicateApplications = (apps) => {
    const uniqueApps = [];
    const seenHashes = new Set();

    for (const app of apps) {
      if (!seenHashes.has(app.hash)) {
        seenHashes.add(app.hash);
        uniqueApps.push(app);
      }
    }

    return uniqueApps;
  };

  // hostdagi applicationlarni olish
  const fetchApplicationsByHost = async (id) => {
    if (!id) {
      setApplications([]);
      return;
    }

    try {
      setAppsLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }applications/applications/?host=${id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Remove duplicate applications
      const uniqueApplications = removeDuplicateApplications(
        data.results || []
      );
      setApplications(uniqueApplications);
    } catch (err) {
      setError("Failed to load applications: " + err.message);
      setApplications([]);
    } finally {
      setAppsLoading(false);
    }
  };

  // Handle host selection change
  const handleHostChange = (hostUuid) => {
    // Clear previous applications immediately
    setApplications([]);
    form.setFieldsValue({ hash: null });
    setSelectedHost(hostUuid);

    if (hostUuid) {
      // Find the host object to get its ID
      const selectedHostObj = hosts.find((host) => host.bios_uuid === hostUuid);
      if (selectedHostObj) {
        fetchApplicationsByHost(selectedHostObj.id);
      }
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    setError(null);

    try {
      await createRule({
        title: values.title,
        description: values.description,
        host: values.host || null,
        hash: values.hash || null,
        port: values.port,
        protocol: values.protocol,
        direction: values.direction,
        action: values.action,
      });

      message.success("Firewall rule created successfully!");
      form.resetFields();
      navigate("/firewall");
    } catch (err) {
      setError(err.message);
      console.error("Error creating firewall rule:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/firewall")}
              style={{ marginRight: 16 }}
            >
              Back
            </Button>
            <span>Create Firewall Rule</span>
          </div>
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
            closable
            onClose={() => setError(null)}
          />
        )}

        <Spin spinning={hostsLoading}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Rule Name"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input rule name",
                    },
                    {
                      max: 100,
                      message: "Rule name cannot exceed 100 characters",
                    },
                  ]}
                >
                  <Input placeholder="Enter rule name" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      max: 500,
                      message: "Description cannot exceed 500 characters",
                    },
                  ]}
                >
                  <Input placeholder="Enter description (optional)" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Host Device"
                  name="host"
                  rules={[
                    {
                      required: false,
                      message: "Please select a host device",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a host device"
                    allowClear
                    loading={hostsLoading}
                    onChange={handleHostChange}
                  >
                    {hosts.map((host) => (
                      <Option key={host.bios_uuid} value={host.bios_uuid}>
                        {host.host_name || host.bios_uuid}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Application"
                  name="hash"
                  rules={[
                    {
                      required: false,
                      message: "Please select an application hash",
                    },
                  ]}
                >
                  <Select
                    placeholder={
                      selectedHost
                        ? "Select an application"
                        : "First select a host device"
                    }
                    allowClear
                    loading={appsLoading}
                    disabled={!selectedHost}
                  >
                    {applications.map((app) => (
                      <Option key={app.hash} value={app.hash}>
                        {app.name || app.hash}
                      </Option>
                    ))}
                    {selectedHost &&
                      applications.length === 0 &&
                      !appsLoading && (
                        <Option disabled value="no-apps">
                          No applications found for this host
                        </Option>
                      )}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Port Number"
                  name="port"
                  rules={[
                    {
                      required: true,
                      message: "Please input port number",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Port must be a number",
                    },
                    {
                      validator: (_, value) => {
                        if (value && (value < 1 || value > 65535)) {
                          return Promise.reject(
                            new Error("Port must be between 1 and 65535")
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter port number"
                    type="number"
                    min={1}
                    max={65535}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Protocol"
                  name="protocol"
                  rules={[
                    {
                      required: true,
                      message: "Please select protocol",
                    },
                  ]}
                >
                  <Select placeholder="Select protocol">
                    <Option value="TCP">TCP</Option>
                    <Option value="UDP">UDP</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Direction"
                  name="direction"
                  rules={[
                    {
                      required: true,
                      message: "Please select direction",
                    },
                  ]}
                >
                  <Select placeholder="Select direction">
                    <Option value="INBOUND">INBOUND</Option>
                    <Option value="OUTBOUND">OUTBOUND</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Action"
                  name="action"
                  rules={[
                    {
                      required: true,
                      message: "Please select action",
                    },
                  ]}
                >
                  <Select placeholder="Select action">
                    <Option value="ALLOW">ALLOW</Option>
                    <Option value="BLOCK">BLOCK</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
                size="large"
              >
                Create rule
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Card>
    </div>
  );
};

export default CreateFirewallRule;
