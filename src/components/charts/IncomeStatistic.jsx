// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { Column } from "@ant-design/charts";

const DemoColumn = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.render();
    }
  }, []);

  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json",
    },
    xField: "城市",
    yField: "销售额",
    slider: {
      x: {
        values: [0.1, 0.2],
      },
    },
  };

  return (
    <div
      style={{
        margin: 24,
        minHeight: 360,
        background: "white",
        flexBasis: "calc(100%)",
        borderRadius: 8,
      }}
    >
      <div style={{ paddingTop: "8px" }}>
        <h3 style={{ padding: "18px" }}>Faoliyat turi</h3>
        <hr />
        <br />
        <Column {...config} chartRef={chartRef} />
      </div>
    </div>
  );
};

export default DemoColumn;
