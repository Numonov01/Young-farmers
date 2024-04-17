import React from "react";
import { Column } from "@ant-design/plots";

function IncomeStatistic() {
  const data = [
    { type: "Ahillik mahallasi", value: 0.36 },
    { type: "Ahilmas mahallasi", value: 0.25 },
    { type: "Bobur mahallasi", value: 0.24 },
    { type: "Tosh mahallasi", value: 0.19 },
    { type: "Birlik mahallasi", value: 0.12 },
    { type: "Tinchlik mahallasi", value: 0.15 },
    { type: "Notinch mahallasi", value: 0.16 },
    { type: "Tosh mahallasi", value: 0.1 },
  ];
  const chartRef = React.useRef(null);

  const medal = (datum, ranking) => {
    if (ranking > 2) return datum;
    const { chart } = chartRef.current;
    const { document } = chart.getContext().canvas;
    const group = document?.createElement("g", {});

    const size = ranking === 0 ? 20 : 15;
    const icon = document.createElement("image", {
      style: {
        src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1NiMRKb2sfMAAAAAAAAAAAAADmJ7AQ/original",
        width: size,
        height: size,
        anchor: "0.5 0.5",
      },
    });
    const text = ["Ahillik", "Ahilmas", "Bobur"][ranking];
    const label = document.createElement("text", {
      style: {
        text,
        fill: "gray",
        textAlign: "center",
        transform: `translate(0, 25)`,
      },
    });

    group.appendChild(icon);
    group.appendChild(label);
    return group;
  };

  const config = {
    data,
    xField: "type",
    yField: "value",
    colorField: "type",
    axis: {
      x: {
        size: 40,
        labelFormatter: (datum, index) => medal(datum, index),
      },
    },
    onReady: (plot) => (chartRef.current = plot),
  };
  return (
    <div
      style={{
        margin: 24,
        minHeight: 360,
        minWidth: 230,
        background: "white",
        flexBasis: "calc(100%)",
        borderRadius: 8,
        padding: 18,
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: 18,
        }}
      >
        <h1
          style={{
            margin: 18,
          }}
        >
          Daromad
        </h1>
        <hr />
        <br />
        <Column {...config} />
      </div>
    </div>
  );
}

export default IncomeStatistic;
