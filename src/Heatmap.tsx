// @ts-nocheck
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";
import "./Heatmap.scss";
import { valueMap, cellTypes, procedures } from "./Constants";
import { useHistory } from "react-router-dom";

const cellTypeLabelMap: any = {};
const colTypes = cellTypes
  .filter((c) => c.type === "procedure")
  .concat(procedures);
colTypes.forEach(({ key, display }) => (cellTypeLabelMap[key] = display));

export const MyResponsiveHeatMapCanvas = ({
  data,
  columns,
}: {
  data: any;
  columns: Array<any>;
}) => {
  const history = useHistory();

  return (
    <ResponsiveHeatMapCanvas
      data={data}
      keys={columns.map((c) => c.key)}
      indexBy="gene"
      margin={{ top: 230, right: 0, bottom: 50, left: 120 }}
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
      onClick={(e) => {
        const type = colTypes.find((c) => c.key == e.xKey).type;
        history.push(
          `data/details/${e.yKey}/${
            type === "cell" ? "by-cell-type" : "by-procedure"
          }/${encodeURIComponent(cellTypeLabelMap[e.xKey])}`
        );
      }}
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
          <em>{valueMap[value]}</em> <br />
          <strong>{yKey}</strong>
        </span>
      )}
    />
  );
};
