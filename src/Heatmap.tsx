// @ts-nocheck
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";
import "./Heatmap.scss";

const valueMap = [
  "No data",
  "Not enough data",
  "Not significantly different",
  "Significantly different",
];

export const MyResponsiveHeatMapCanvas = ({
  data,
  columns,
}: {
  data: any;
  columns: Array<any>;
}) => (
  <ResponsiveHeatMapCanvas
    data={data}
    keys={columns.map((c) => c.key)}
    indexBy="gene"
    margin={{ top: 180, right: 0, bottom: 20, left: 120 }}
    pixelRatio={1}
    minValue="0"
    maxValue="3"
    forceSquare={false}
    sizeVariation={0}
    padding={1}
    colors={["white", "#acacac", "#0a49b5cd", "#b50a29c4"]}
    axisTop={{
      orient: "top",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "",
      legendOffset: 36,
      tickValues: columns.map((c) => c.display),
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    enableGridX={false}
    enableGridY={true}
    cellShape="rect"
    cellOpacity={1}
    cellBorderWidth={0}
    cellBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
    enableLabels={false}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
    animate={true}
    motionStiffness={120}
    motionDamping={9}
    isInteractive={true}
    hoverTarget="rowColumn"
    cellHoverOpacity={1}
    cellHoverOthersOpacity={0.5}
    theme={{
      axis: {
        ticks: {
          text: {
            fontSize: 14,
            fontSmooth: "always",
          },
        },
      },
    }}
    tooltip={({ xKey, yKey, value, color }) => (
      <span>
        <strong>{columns.find((c) => c.key === xKey).display}</strong> <br />
        <emp>{valueMap[value]}</emp> <br />
        <strong>{yKey}</strong>
      </span>
    )}
  />
);
