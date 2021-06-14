import {
  faCircle,
  faDotCircle,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";

export const Legend: FunctionComponent = () => {
  const getCellColor = ["white", "#acacac", "#416ec5", "#c9505d"];
  const colorlabel = [
    "No data",
    "Not enough data",
    "Not significantly different WT vs KO",
    "Significantly Different WT vs KO",
  ];
  return (
    <div className="my-3 w-100 text-center">
      {getCellColor.map((color, index) => (
        <span>
          &nbsp;
          <span
            style={{
              backgroundColor: color,
              border: "solid 1px black",
              width: "12px",
              height: "12px",
              display: "inline-block",
            }}
          ></span>
          &nbsp;
          {colorlabel[index]}
          &nbsp; &nbsp;
        </span>
      ))}
    </div>
  );
};
