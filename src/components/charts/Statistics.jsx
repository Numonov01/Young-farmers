// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  UsergroupAddOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  ArrowUpOutlined,
  PieChartOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Card, Statistic } from "antd";

export default function Statistics() {
  const [countValue, setCountValue] = useState(0);
  const targetValue = 7815;
  const duration = 1;

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const startCountAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration * 1000) {
        const newValue = (progress / (duration * 1000)) * targetValue;
        setCountValue(newValue);
        animationFrameId = requestAnimationFrame(startCountAnimation);
      } else {
        setCountValue(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(startCountAnimation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, duration]);
  return (
    <div>
      <div
        className="son"
        style={{
          margin: "0px 24px 24px 24px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <Card
          bordered={false}
          style={{
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <UsergroupAddOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Yosh dehqonlar soni"
              value={countValue}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  16%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>

        <Card
          bordered={false}
          style={{
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PieChartOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Faoliyat turi"
              value={countValue}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#FF0000", fontSize: 20 }}>
                  -7%
                  <ArrowDownOutlined
                    style={{ color: "#FF0000", fontSize: 16 }}
                  />
                </span>
              }
            />
          </div>
        </Card>

        <Card
          bordered={false}
          style={{
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AreaChartOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Umumiy ajratilgan maydon"
              value={countValue}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  27%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>

        <Card
          bordered={false}
          style={{
            flexGrow: 1,
            flexBasis: 160,
            minWidth: 230,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PayCircleOutlined style={{ fontSize: 35, marginBottom: 15 }} />
            <Statistic
              title="Daromad"
              value={countValue}
              precision={0}
              valueStyle={{
                fontSize: 30,
                color: "#1F1F1F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bolder",
                padding: "10px 0 0 0",
              }}
              suffix={
                <span style={{ color: "#68C738", fontSize: 20 }}>
                  13%
                  <ArrowUpOutlined style={{ color: "#68C738", fontSize: 16 }} />
                </span>
              }
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
