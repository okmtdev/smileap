"use client";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Room Temperature",
    data: [
      { x: "00:00", y: 22 },
      { x: "01:00", y: 21.8 },
      { x: "02:00", y: 21.6 },
      { x: "03:00", y: 21.4 },
      { x: "04:00", y: 21.2 },
      { x: "05:00", y: 21 },
      { x: "06:00", y: 21.5 },
      { x: "07:00", y: 22.5 },
      { x: "08:00", y: 23 },
      { x: "09:00", y: 23.5 },
      { x: "10:00", y: 24 },
      { x: "11:00", y: 24.5 },
      { x: "12:00", y: 25 },
      { x: "13:00", y: 25.2 },
      { x: "14:00", y: 25.3 },
      { x: "15:00", y: 25.1 },
      { x: "16:00", y: 24.8 },
      { x: "17:00", y: 24.5 },
      { x: "18:00", y: 24 },
      { x: "19:00", y: 23.5 },
      { x: "20:00", y: 23 },
      { x: "21:00", y: 22.8 },
      { x: "22:00", y: 22.5 },
      { x: "23:00", y: 22.2 },
    ],
  },
];

export default function Temperature() {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">気温グラフ</h2>
      <div className="h-[300px]">
        <ResponsiveLine
          data={data}
        margin={{ top: 0, right: 10, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [
            "00:00",
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00",
          ],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "気温",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
      </div>
    </div>
  );
}
