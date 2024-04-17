// eslint-disable-next-line no-unused-vars
import React from "react";

import { Bar } from "@ant-design/plots";
export default function FarmerStatistic() {
  const data = [
    {
      labelName: "MEVACHILIK",
      value: 110,
    },
    {
      labelName: "POLIZ",
      value: 520,
    },
    {
      labelName: "ARPA",
      value: 280,
    },
    {
      labelName: "BUGDOY",
      value: 840,
    },
  ];
  const config = {
    data,
    xField: "labelName",
    yField: "value",
    paddingRight: 50,
    style: {
      maxWidth: 18,
    },
    markBackground: {
      label: {
        text: ({ originData }) => {
          return `${originData.value} `;
        },
        position: "right",
        dx: 50,
        style: {
          fill: "#aaa",
          fillOpacity: 1,
          fontSize: 14,
        },
      },
      style: {
        fill: "#eee",
      },
    },
    scale: {
      y: {
        domain: [0, 1000],
      },
    },
    axis: {
      x: {
        tick: false,
        title: false,
      },
      y: {
        grid: false,
        tick: false,
        label: false,
        title: false,
      },
    },
    interaction: {
      elementHighlightByColor: false,
    },
  };
  return (
    <div
      style={{
        margin: 24,
        minHeight: 360,
        minWidth: 230,
        background: "white",
        flexBasis: "calc(50%)",
        borderRadius: 8,
        padding: 18,
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
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
        <h2>FAOLIYAT TURI</h2>
        <h2>DEHQONLAR SONI</h2>
      </div>
      <hr />
      <Bar {...config} />
    </div>
  );
}
