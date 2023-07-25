import React from "react";
import "./Cell.css";

function Cell({ flipCellsAroundMe, isLit = false }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={flipCellsAroundMe} role="button" />;
}

export default Cell;
