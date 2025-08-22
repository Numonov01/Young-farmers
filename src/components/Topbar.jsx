import { Select, DatePicker, Space } from "antd";

export default function Topbar() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div
      style={{
        paddingTop: "8px",
        paddingBottom: "8px",
        position: "sticky",
        top: "0px",
        // padding: "20px",
        zIndex: "12",
        background: " rgb(235, 237, 240)",
      }}
    >
      <div
        className="data"
        style={{
          margin: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          // paddingTop: "10px",
          gap: 10,
        }}
      >
        <Select
          showSearch
          style={{
            height: 38,
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
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
            height: 38,
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
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
            height: 38,
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
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
        <Space
          direction="vertical"
          style={{
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
          }}
        >
          <DatePicker
            onChange={onChange}
            placeholder="Sana"
            style={{
              height: 38,
              width: "100%",
            }}
          />
        </Space>
      </div>
    </div>
  );
}
