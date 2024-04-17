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
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <FarmerStatistic />
        <ProblemComments />
        <IncomeStatistic />
      </div>
    </>
  );
}

export default OptionTwo;
