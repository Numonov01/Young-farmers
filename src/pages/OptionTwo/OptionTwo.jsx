// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie, Bar } from "@ant-design/plots";

import {
  UsergroupAddOutlined,
  AreaChartOutlined,
  AlignLeftOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";
import { Card, Statistic, Select, DatePicker, Space } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
//Xarita
const config1 = {
  data: [
    { type: "Toshkent", value: 27 },
    { type: "Samarqand", value: 25 },
    { type: "Buxoro", value: 18 },
    { type: "Farg'ona", value: 15 },
    { type: "Namangan", value: 10 },
    { type: "Andijon", value: 5 },
  ],
  angleField: "value",
  colorField: "type",
  paddingRight: 80,
  label: {
    text: "value",
    position: "outside",
  },
  legend: {
    color: {
      title: false,
      position: "right",
      rowPadding: 5,
    },
  },
};

//Pie
const config3 = {
  data: [
    { type: "1", value: 83 },
    { type: "Bartaraf etilgan", value: 17 },
    // { type: "Qolganlari", value: 18 },
  ],
  angleField: "value",
  colorField: "type",
  paddingRight: 80,
  innerRadius: 0.6,
  label: {
    text: "value",
    style: {
      fontWeight: "bold",
    },
  },
  legend: {
    color: {
      title: false,
      position: "right",
      rowPadding: 5,
    },
  },
  annotations: [
    {
      type: "text",
      style: {
        text: "5600",
        x: "50%",
        y: "50%",
        textAlign: "center",
        fontSize: 40,
        fontStyle: "bold",
      },
    },
  ],
};

//Bar chart
const data = [
  {
    labelName: "MEVACHILIK",
    value: 110,
  },
  {
    labelName: "POLIZ",
    value: 520,
  },
  {
    labelName: "ARPA",
    value: 280,
  },
  {
    labelName: "BUGDOY",
    value: 840,
  },
];
const config2 = {
  data,
  xField: "labelName",
  yField: "value",
  paddingRight: 50,
  style: {
    maxWidth: 18,
  },
  markBackground: {
    label: {
      text: ({ originData }) => {
        return `${originData.value} `;
      },
      position: "right",
      dx: 50,
      style: {
        fill: "#aaa",
        fillOpacity: 1,
        fontSize: 14,
      },
    },
    style: {
      fill: "#eee",
    },
  },
  scale: {
    y: {
      domain: [0, 1000],
    },
  },
  axis: {
    x: {
      tick: false,
      title: false,
    },
    y: {
      grid: false,
      tick: false,
      label: false,
      title: false,
    },
  },
  interaction: {
    elementHighlightByColor: false,
  },
};

function OptionTwo() {
  return (
    <>
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
            width: 200,
          }}
          placeholder="HUDUD"
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
            width: 200,
          }}
          placeholder="TUMAN"
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
            width: 200,
          }}
          placeholder="MAHALLA"
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
          <DatePicker onChange={onChange} picker="year" placeholder="YIL" />
        </Space>
        <Space direction="vertical">
          <DatePicker onChange={onChange} picker="week" placeholder="OY" />
        </Space>
      </div>
      <div
        className="son"
        style={{
          margin: 24,
          display: "flex",
          // flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <Card
          bordered={false}
          style={{
            width: 220,
            textAlign: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Statistic
            title="Yosh dehqonlar soni"
            value={7812.3}
            precision={2}
            valueStyle={{
              color: "#3f8600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            prefix={<UsergroupAddOutlined />} // Bu qator
            suffix="ta"
          />
        </Card>
        <Card
          bordered={false}
          style={{
            width: 220,
            textAlign: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Statistic
            title="Faoliyat turi"
            value={78}
            precision={2}
            valueStyle={{
              color: "#3f8600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            prefix={<AlignLeftOutlined />} // Bu qator
            suffix="ta"
          />
        </Card>
        <Card
          bordered={false}
          style={{
            width: 220,
            textAlign: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Statistic
            title="Umumiy ajratilgan maydon"
            value={952.8}
            precision={2}
            valueStyle={{
              color: "#3f8600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            prefix={<AreaChartOutlined />} // Bu qator
            suffix="ga"
          />
        </Card>
        <Card
          bordered={false}
          style={{
            width: 220,
            textAlign: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Statistic
            title="Muammo va takliflar"
            value={128}
            precision={2}
            valueStyle={{
              color: "#3f8600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            prefix={<UsergroupAddOutlined />} // Bu qator
            suffix="ta"
          />
        </Card>
        <Card
          bordered={false}
          style={{
            width: 220,
            textAlign: "center",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Statistic
            title="Daromad"
            value={1128.4}
            precision={2}
            valueStyle={{
              color: "#3f8600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            prefix={<PayCircleOutlined />} // Bu qator
            suffix="$"
          />
        </Card>
      </div>
      <div
        className="map"
        style={{
          margin: 24,
          minHeight: 360,
          background: "white",
          borderRadius: 8,
          padding: 18,
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "8px" }}>
          <h2 style={{ paddingBottom: "18px" }}>UMUMUMIY AJRATILGAN MAYDON</h2>
          <Pie {...config1} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            margin: 24,
            minHeight: 360,
            minWidth: 230,
            background: "white",
            flexBasis: "calc(50%)",
            borderRadius: 8,
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: 18,
            }}
          >
            <h2>FAOLIYAT TURI</h2>
            <h2>DEHQONLAR SONI</h2>
          </div>
          <Bar {...config2} />
        </div>

        <div
          style={{
            margin: 24,
            minHeight: 360,
            minWidth: 230,
            flexBasis: "calc(40%)",
            background: "white",
            borderRadius: 8,
            padding: 18,
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2>MUAMMO VA TAKLIFLAR</h2>
          </div>
          <Pie {...config3} />
        </div>
      </div>
    </>
  );
}

export default OptionTwo;
