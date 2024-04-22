// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  UsergroupAddOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  ArrowUpOutlined,
  PieChartOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Card, Statistic, Select, DatePicker, Space } from "antd";
export default function Topbar() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <div
        className="data"
        style={{
          margin: 24,
          display: "flex",
          // flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <Select
          showSearch
          style={{
            width: 300,
            height: 40,
          }}
          placeholder="Hudud"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Toshkent",
            },
            {
              value: "2",
              label: "Andijon",
            },
            {
              value: "3",
              label: "Qashqadaryo",
            },
            {
              value: "4",
              label: "Buxoro",
            },
          ]}
        />
        <Select
          showSearch
          style={{
            width: 300,
            height: 40,
          }}
          placeholder="Tuman"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Kitob",
            },
            {
              value: "2",
              label: "Shahrisabz",
            },
            {
              value: "3",
              label: "Chiroqchi",
            },
          ]}
        />
        <Select
          showSearch
          style={{
            width: 300,
            height: 40,
          }}
          placeholder="Mahalla"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Birlik",
            },
            {
              value: "2",
              label: "Ahillik",
            },
            {
              value: "3",
              label: "Sergili",
            },
          ]}
        />
        <Space direction="vertical">
          <DatePicker
            onChange={onChange}
            placeholder="Sana"
            style={{
              width: 300,
              height: 40,
            }}
          />
        </Space>
      </div>
      <div
        className="son"
        style={{
          margin: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <Card
          bordered={false}
          style={{
            width: 300,
            // boxShadow:
            //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <UsergroupAddOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Yosh dehqonlar soni"
              value={7812}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  16%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>

        <Card
          bordered={false}
          style={{
            width: 300,
            // boxShadow:
            //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PieChartOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Faoliyat turi"
              value={7812}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#FF0000", fontSize: 20 }}>
                  -7%
                  <ArrowDownOutlined
                    style={{ color: "#FF0000", fontSize: 16 }}
                  />
                </span>
              }
            />
          </div>
        </Card>

        <Card
          bordered={false}
          style={{
            width: 300,
            // boxShadow:
            //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AreaChartOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Umumiy ajratilgan maydon"
              value={7812}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  27%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>
        {/* 
        <Card
          bordered={false}
          style={{
            width: 300,
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <UsergroupAddOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Muammo va takliflar"
              value={7812}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#FF0000", fontSize: 20 }}>
                  -4%
                  <ArrowUpOutlined style={{ color: "#FF0000", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card> */}

        <Card
          bordered={false}
          style={{
            width: 300,
            // boxShadow:
            //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PayCircleOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Daromad"
              value={7812}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  13%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
