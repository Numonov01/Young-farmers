// eslint-disable-next-line no-unused-vars
import React from "react";
import { Pie } from "@ant-design/plots";

export default function ProblemComments() {
  const config = {
    data: [
      { type: "123", value: 53 },
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
        flexGrow: 1,
        flexBasis: 100,
        minWidth: 230,
        background: "white",
        borderRadius: 8,
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
