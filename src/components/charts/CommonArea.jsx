// eslint-disable-next-line no-unused-vars
import React from "react";

import { Pie } from "@ant-design/plots";
function CommonArea() {
  const config = {
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
  return (
    <div
      className="map"
      style={{
        margin: 24,
        minHeight: 360,
        background: "white",
        borderRadius: 8,
        padding: 18,
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "8px" }}>
        <h2 style={{ paddingBottom: "18px" }}>UMUMUMIY AJRATILGAN MAYDON</h2>
        <hr />
        <br />
        <Pie {...config} />
      </div>
    </div>
  );
}

export default CommonArea;
