import React, { useContext } from "react";
import { Graph } from "react-d3-graph";
import { GraphContext } from "../../state/store/store";

import "./GraphWrapper.css";
const data = {
  nodes: [
    {
      id: "0",
      color: "red",
      symbolType: "diamond",
      size: 300,
    },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ],
  links: [
    { source: "0", target: "1" },
    { source: "1", target: "2", label: "dddddds" },
    { source: "3", target: "0", label: "dddddds" },
    { source: "4", target: "1" },
  ],
};

const GraphWrapper = () => {
  const [graphData, setGraphData] = React.useState(data);
  const { dispatch, state } = useContext(GraphContext);

  React.useEffect(() => {
    setGraphData(state);
  }, [state]);
  const myConfig = {
    directed: false,
    nodeHighlightBehavior: true,
    maxZoom: 3,
    minZoom: 1,
    node: {
      color: "lightgreen",
      size: 400,
      highlightStrokeColor: "blue",
      symbolType: "circle",
    },
    link: {
      highlightColor: "lightblue",
      renderLabel: true,
      labelProperty: "source",
    },
  };

  return (
    <div className="center">
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={graphData}
        config={myConfig}
      />
    </div>
  );
};

export default GraphWrapper;
