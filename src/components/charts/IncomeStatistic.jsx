// eslint-disable-next-line no-unused-vars
import React from "react";
import { Column } from "@ant-design/plots";

const config = {
  data: [
    { action: "Toshkent", pv: 47600 },
    { action: "Samarqand", pv: 31200 },
    { action: "Buxoro", pv: 35000 },
    { action: "Andijon", pv: 18600 },
    { action: "Qashqadaryo", pv: 42500 },
    { action: "Jizzax", pv: 22000 },
    { action: "Farg'ona", pv: 35000 },
    { action: "Xorazm", pv: 25000 },
    { action: "Namangan", pv: 50000 },
    { action: "Navoiy", pv: 18500 },
    { action: "Qoraqalpogʻiston", pv: 30000 },
    { action: "Sirdaryo", pv: 35000 },
    { action: "Surxondaryo", pv: 25000 },
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
        <h3 style={{ padding: 18 }}>Umumiy ajratilgan maydon</h3>
        <hr />
        <Column {...config} />
      </div>
    </>
  );
}

export default IncomeStatistic;
