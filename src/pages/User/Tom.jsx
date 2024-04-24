// eslint-disable-next-line no-unused-vars
import React from "react";
import { Table } from "antd";
import { useParams } from "react-router-dom";

const columns = [
  {
    title: "Ism",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Yosh",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Manzil",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "Nu'monov Tohir",
    age: 21,
    address: "Toshkent. Yunusobod",
    description: "numonovtokhir@gmail.com",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. ",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
  {
    key: 4,
    name: "Qadirbayev Gafur",
    age: 18,
    address: "Qoraqalpoq. Nukus",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
  {
    key: 5,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. London",
    description: "This not expandable",
  },
];
function Tom() {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
      <Table
        style={{
          margin: 24,
        }}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </>
  );
}

export default Tom;
