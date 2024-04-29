// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BankOutlined } from "@ant-design/icons";
import UzbMap from "../../pages/OptionTwo/UzbMap";

function CommonArea() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ padding: 18, flex: 2, minWidth: 250 }}>
            <UzbMap />
          </div>
          <div style={{ padding: 18, flex: 1, minWidth: 232, margin: "auto" }}>
            <div
              style={{
                padding: 20,
                border: "2px solid #ebedf0",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  // padding: "0px 10px",
                  marginTop: 20,
                }}
              >
                <BankOutlined style={{ fontSize: 30, marginRight: 16 }} />
                <p style={{ fontSize: 18 }}>Hududiy vakillar</p>
              </div>
              <div>
                <h2 style={{ margin: "20px 0" }}>Buxoro viloyati</h2>
                <h2 style={{ margin: "10px 0 40px 0" }}>
                  Baxtiyorov Shaxriyor
                </h2>
              </div>
              <table style={{ paddingBottom: 20 }}>
                <tr>
                  <td>Tinchlik mahallasi</td>
                  <td>2600</td>
                  <td style={{ borderRight: "none" }}>GA</td>
                </tr>
                <tr>
                  <td>Ahillik mahallasi</td>
                  <td>1100</td>
                  <td style={{ borderRight: "none" }}>GA</td>
                </tr>
                <tr>
                  <td>Bubur mahallasi</td>
                  <td>1050</td>
                  <td style={{ borderRight: "none" }}>GA</td>
                </tr>
                <tr>
                  <td>Birlik mahallasi</td>
                  <td>100</td>
                  <td style={{ borderRight: "none" }}>GA</td>
                </tr>
                <tr>
                  <td>Sergeli mahallasi</td>
                  <td>780</td>
                  <td style={{ borderRight: "none" }}>GA</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonArea;
