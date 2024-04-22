// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie } from "@ant-design/plots";

export default function ProblemComments() {
  const config = {
    data: [
      { type: "1", value: 53 },
      { type: "Bartaraf etilgan", value: 17 },
      { type: "Qolganlari", value: 30 },
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
          fontSize: 30,
          fontStyle: "bold",
        },
      },
    ],
  };
  return (
    <div
      style={{
        margin: 24,
        minHeight: 360,
        minWidth: 230,
        flexBasis: "calc(40%)",
        background: "white",
        borderRadius: 8,
        // boxShadow:
        //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div style={{ padding: 18 }}>
        <h3>Muammo va takliflar</h3>
      </div>
      <hr />
      <Pie {...config} />
    </div>
  );
}
