"use client";

import BarChart from "@/components/modules/chart/bar";
import PieChart from "@/components/modules/chart/pie";
import reportData from "@/seeder/report-seeder.json";
import { useEffect, useState } from "react";
const palette = require("google-palette");

export default function Report() {
  const [weeklyData, setWeeklyData] = useState<Array<Number>>([]);
  const [weeklyLabel, setWeeklyLabel] = useState<Array<String>>([]);
  const [categoryData, setCategoryData] = useState<Array<Number>>([]);
  const [categoryLabel, setCategoryLabel] = useState<Array<String>>([]);

  useEffect(() => {
    setWeeklyData(reportData.weekly);
    setWeeklyLabel([
      "17 Oct",
      "16 Oct",
      "15 Oct",
      "14 Oct",
      "13 Oct",
      "12 Oct",
    ]);

    const catData: Array<Number> = [];
    const catLabel: Array<String> = [];
    reportData.categories.forEach((i) => {
      catData.push(i.value);
      catLabel.push(i.name);
    });
    setCategoryData(catData);
    setCategoryLabel(catLabel);
  }, []);

  return (
    <main>
      <div className="flex justify-between items-baseline my-9">
        <h2 className="text-stone-700 font-semibold text-xl">
          Report From Pass Week
        </h2>
      </div>
      <div>
        <BarChart
          data={{
            labels: weeklyLabel,
            datasets: [
              {
                label: "Report From 1 Past Week",
                data: weeklyData,
                backgroundColor: palette("tol", weeklyData.length).map(
                  function (hex: string) {
                    return "#" + hex;
                  }
                ),
              },
            ],
          }}
        />
      </div>
      <div className="flex justify-between items-baseline my-9">
        <h2 className="text-stone-700 font-semibold text-xl">
          Report By Category
        </h2>
      </div>
      <div className="p-6">
        <PieChart
          data={{
            labels: categoryLabel,
            datasets: [
              {
                data: categoryData,
                backgroundColor: palette("tol", weeklyData.length).map(
                  function (hex: string) {
                    return "#" + hex;
                  }
                ),
              },
            ],
          }}
        />
      </div>
    </main>
  );
}
