// eslint-disable-next-line no-unused-vars
import React from "react";
import Topbar from "./../../components/Topbar";
import CommonArea from "../../components/charts/CommonArea";
import FarmerStatistic from "../../components/charts/FarmerStatistic";
import ProblemComments from "../../components/charts/ProblemComments";
import IncomeStatistic from "../../components/charts/IncomeStatistic";

function OptionTwo() {
  return (
    <>
      <Topbar />

      <CommonArea />

      <div
        style={{
          margin: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <FarmerStatistic />
        <ProblemComments />
      </div>
      <IncomeStatistic />
    </>
  );
}

export default OptionTwo;
