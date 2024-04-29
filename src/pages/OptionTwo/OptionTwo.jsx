// eslint-disable-next-line no-unused-vars
import React from "react";
import Topbar from "./../../components/Topbar";
import CommonArea from "../../components/charts/CommonArea";
import FarmerStatistic from "../../components/charts/FarmerStatistic";
import ProblemComments from "../../components/charts/ProblemComments";
import IncomeStatistic from "../../components/charts/IncomeStatistic";
import Activity from "../../components/charts/Tables";
import Statistics from "../../components/charts/Statistics";

function OptionTwo() {
  return (
    <>
      <Topbar />
      <Statistics />

      <CommonArea />
      <IncomeStatistic />
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

      <Activity />
    </>
  );
}

export default OptionTwo;
