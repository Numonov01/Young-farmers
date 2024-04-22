// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie } from "@ant-design/plots";

function CommonArea() {
  const config = {
    data: [
      { type: "Andijon viloyati", value: 17 },
      { type: "Buxoro viloyati", value: 15 },
      { type: "Fargona viloyati", value: 18 },
      { type: "Jizzax viloyati", value: 15 },
      { type: "Xorazm viloyati", value: 10 },
      { type: "Namangan viloyati", value: 5 },
      { type: "Navoiy viloyati", value: 27 },
      { type: "Qashqadaryo viloyati", value: 25 },
      // { type: "Samarqand viloyati", value: 18 },
      // { type: "Sirdaryo viloyati", value: 15 },
      // { type: "Surxondaryo viloyati", value: 10 },
      // { type: "Qoraqalpogiston Respublikasi", value: 5 },
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
  return (
    <div
      className="map"
      style={{
        margin: 24,
        minHeight: 360,
        background: "white",
        borderRadius: 8,
      }}
    >
      <div style={{ paddingTop: "8px" }}>
        <h3 style={{ padding: "18px" }}>Umumiy ajratilgan maydon</h3>
        <hr />
        <br />
        <Pie {...config} />
      </div>
    </div>
  );
}

export default CommonArea;
