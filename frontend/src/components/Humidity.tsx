"use client";

import Image from 'next/image';
import { ResponsiveLine } from "@nivo/line";
import { Droplets } from "lucide-react";

const data = [
  {
    id: "Room Humidity",
    data: [
      { x: "00:00", y: 55 },
      { x: "01:00", y: 56 },
      { x: "02:00", y: 57 },
      { x: "03:00", y: 58 },
      { x: "04:00", y: 57 },
      { x: "05:00", y: 56 },
      { x: "06:00", y: 55 },
      { x: "07:00", y: 54 },
      { x: "08:00", y: 50 },
      { x: "09:00", y: 48 },
      { x: "10:00", y: 45 },
      { x: "11:00", y: 43 },
      { x: "12:00", y: 42 },
      { x: "13:00", y: 42 },
      { x: "14:00", y: 43 },
      { x: "15:00", y: 45 },
      { x: "16:00", y: 48 },
      { x: "17:00", y: 50 },
      { x: "18:00", y: 52 },
      { x: "19:00", y: 53 },
      { x: "20:00", y: 54 },
      { x: "21:00", y: 55 },
      { x: "22:00", y: 56 },
      { x: "23:00", y: 55 },
    ],
  },
];

export default function Humidity() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <Droplets size={24} />
        <span>湿度グラフ</span>
      </h2>
      <div className="h-[300px]">
        <ResponsiveLine
          data={data}
          tooltip={({ point }) => {
            return (
              <div
                style={{
                  background: "white",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "320px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div className="text-lg font-bold mb-2 text-center">
                  {`${parseInt(point.data.xFormatted.split(":")[0], 10)}時 ${
                    point.data.yFormatted
                  }%`}
                </div>
                <Image
                  src={`https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/images/sample.png`}
                  alt="alt"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          }}
          margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 100,
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            format: (value) => `${parseInt(value.split(":")[0], 10)}時`,
            tickValues: [
              "00:00", "02:00", "04:00", "06:00", "08:00", "10:00",
              "12:00", "14:00", "16:00", "18:00", "20:00", "22:00",
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
            legend: "湿度 (%)",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          colors={['#2563eb']}
          theme={{
            axis: {
              ticks: { text: { fill: "#6b7280" } },
              legend: { text: { fill: "#6b7280" } },
            },
            grid: { line: { stroke: "#e5e7eb" } },
            tooltip: {
              container: {
                background: '#ffffff',
                color: '#374151',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
