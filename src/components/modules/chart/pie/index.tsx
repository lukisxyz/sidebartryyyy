"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, Colors, registerables } from "chart.js";
Chart.register(...registerables);
Chart.register(Colors);

interface PieChartProps {
  data: any;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
