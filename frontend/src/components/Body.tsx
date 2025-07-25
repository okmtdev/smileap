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

export default function Body() {
  return (
    <div className="h-[400px]">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Time",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temperature (°C)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
