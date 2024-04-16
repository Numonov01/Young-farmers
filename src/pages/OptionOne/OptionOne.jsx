// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie } from "@ant-design/plots";
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

function OptionOne() {
  return (
    <>
      <div
        style={{
          margin: 24,
          display: "flex",
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
        style={{
          margin: 24,
          display: "flex",
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
        style={{
          margin: 24,
          minHeight: 360,
          background: "lightblue",
          borderRadius: 8,
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "8px" }}>
          <h2>UMUMUMIY AJRATILGAN MAYDON</h2>
          <Pie {...config1} />
        </div>
      </div>
    </>
  );
}

export default OptionOne;
