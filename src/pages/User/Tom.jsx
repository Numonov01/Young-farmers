import { Table } from "antd";
import { useParams } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Password",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gmail",
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
    age: 2684,
    address: "numonovtokhir@gmail.com",
    description: "Toshkent. Yunusobod",
  },
  {
    key: 2,
    name: "Solijonov Muxammadjon",
    age: 15987,
    address: "muhsdev@gmail.com",
    description: "Toshkent. Yunusobod",
  },
  {
    key: 3,
    name: "Bosimbekov Hojiakbar",
    age: 35789,
    address: "xbosimbekov@gmail.com",
    description: "Toshkent. Yunusobod",
  },
  {
    key: 4,
    name: "Nuriddin Muhammadjanov",
    age: 1397,
    address: "nmuhammadjanov@gmail.com",
    description: "Toshkent. Yunusobod",
  },
  {
    key: 5,
    name: "Olimov Faxriddin",
    age: 55555,
    address: "f.olimoff@gmail.com",
    description: "Toshkent. Yunusobod",
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
