import BarChart from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import React, { useState } from "react";
const dashboard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <BarChart chartData={" "} />
      <DoughnutChart />
    </div>
  );
};

export default dashboard;
