// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Radio, Table } from "antd";

function CommonArea() {
  const columns = [
    {
      title: "Region",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Order",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Toshkent viloyati",
      age: 12,
      address: "Lake Park",
    },
    {
      key: "2",
      name: "Jizax viloyati",
      age: 5,
      address: "Lake Park",
    },
    {
      key: "3",
      name: "Andijon viloyati",
      age: 9,
      address: "Lake Park",
    },
    {
      key: "4",
      name: "Qashqadaryo viloyati",
      age: 8,
      address: "Lake Park",
    },
    {
      key: "5",
      name: "Samarqand viloyati",
      age: 4,
      address: "Lake Park",
    },
    {
      key: "6",
      name: "Navoi viloyati",
      age: 7,
      address: "Lake Park",
    },
  ];

  const [selectionType, setSelectionType] = useState("checkbox");

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <>
      <div
        style={{
          margin: 24,
          minHeight: 360,
          minWidth: 230,
          background: "white",
          borderRadius: 8,
        }}
      >
        <h3 style={{ padding: 18 }}>Umumiy ajratilgan maydon</h3>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ padding: 18, flex: 2 }}>
            <img
              src="../uzb.png"
              alt="uzb"
              style={{ maxWidth: "100%", height: "auto", minWidth: 210 }}
            />
            <div id="map"></div>
          </div>
          <div style={{ padding: 18, flex: 1 }}>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            ></Radio.Group>
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonArea;
