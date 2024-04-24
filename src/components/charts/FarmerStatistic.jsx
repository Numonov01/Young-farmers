// eslint-disable-next-line no-unused-vars
import React from "react";
import { Bar } from "@ant-design/plots";

export default function FarmerStatistic() {
  const data = [
    {
      labelName: "MEVACHILIK",
      value: 210,
    },
    {
      labelName: "POLIZ",
      value: 420,
    },
    {
      labelName: "ARPA",
      value: 630,
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
      <Bar {...config} />
    </div>
  );
}
