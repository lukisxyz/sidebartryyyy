"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, Colors, registerables } from "chart.js";
Chart.register(...registerables);
Chart.register(Colors);

interface BarChartProps {
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
