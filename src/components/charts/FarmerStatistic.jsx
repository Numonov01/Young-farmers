// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie } from "@ant-design/plots";

const data = [
  { type: "分类一", value: 27 },
  { type: "分类二", value: 25 },
  { type: "分类三", value: 18 },
  { type: "分类四", value: 15 },
  { type: "分类五", value: 10 },
  { type: "其他", value: 5 },
];
const DemoPie = () => {
  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      text: (d) => `${d.type}\n ${d.value}`,
      position: "spider",
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return (
    <div
      style={{
        flexGrow: 1,
        flexBasis: 300,
        minWidth: 230,
        borderRadius: 8,
        background: "white",
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
        <h3>Faoliyat turi</h3>
        <h3>Dehqonlar soni</h3>
      </div>
      <hr />
      <Pie {...config} />
    </div>
  );
};
export default DemoPie;
