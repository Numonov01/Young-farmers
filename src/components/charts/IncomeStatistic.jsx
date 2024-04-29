// eslint-disable-next-line no-unused-vars
import React from "react";
import { Column } from "@ant-design/plots";

const config = {
  data: [
    { action: "Mevachilik", pv: 47600 },
    { action: "Chorvachilik", pv: 31200 },
    { action: "Dehqonnchilik", pv: 35000 },
    { action: "Baliqchilik", pv: 18600 },
    { action: "Temirchilik", pv: 42500 },
    { action: "Konchilik", pv: 22000 },
    { action: "O'rmonchilik", pv: 35000 },
    { action: "Suvsozlik", pv: 25000 },
    { action: "Nashriyotchilik", pv: 50000 },
    { action: "Ovchilik", pv: 18500 },
    { action: "Sotuvchilik", pv: 30000 },
    { action: "Tarjimonlik", pv: 35000 },
    { action: "Tikuvchilik", pv: 25000 },
  ],
  xField: "action",
  yField: "pv",
  label: {
    text: (d) => d.pv,
    textBaseline: "bottom",
  },
  style: {
    maxWidth: 50,
  },
  conversionTag: {
    size: 40,
    spacing: 4,
    text: {
      formatter: (prev, next) => `${((next / prev) * 100).toFixed(1)}%`,
    },
  },
};

function IncomeStatistic() {
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
        <h3 style={{ padding: 18 }}>Faoliyat turi</h3>
        <hr />
        <Column {...config} />
      </div>
    </>
  );
}

export default IncomeStatistic;
