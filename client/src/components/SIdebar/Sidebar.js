import React, { useContext, useState } from "react";
import { GraphContext } from "../../state/store/store";
import AddEdgeComponent from "../AddEdgeComponent/AddEdgeCompoent";
import Button from "../Button/Button";
import PageRankOptions from "../PageRankOptions/PageRankOptions";
import axios from "axios";
import "./Sidebar.css";
const SideBar = () => {
  const { REACT_APP_SERVER_URL } = process.env;
  const { dispatch, state } = useContext(GraphContext);
  const [addEdgeVisible, setAddEdgeVisible] = useState(false);
  const [pageRankVal, setPageRankVal] = useState(0);

  React.useEffect(() => {
    addNodeApiCall();
  }, []);

  const addNodeApiCall = async (val) => {
    axios({
      method: "post",
      url: `${REACT_APP_SERVER_URL}/v1/graph/node`,
      data: {
        nodeValue: val ? val - 1 : state.nodes.length - 1,
      },
    }).then((res) => {});
  };
  const addNodeHandler = async (e) => {
    setPageRankVal(0);
    dispatch({ type: "addNode" });
    await addNodeApiCall(state.nodes.length + 1);
  };
  const handleEdgeValues = (values) => {
    //dispatch values
    setPageRankVal(0);

    dispatch({
      type: "addEdge",
      payload: { source: values?.srcValue, target: values?.destValue },
    });
    addEdgeApiCall(values?.srcValue - 1, values?.destValue - 1);
    setAddEdgeVisible(false);
  };
  const addEdgeApiCall = async (src, dest) => {
    axios({
      method: "post",
      url: `${REACT_APP_SERVER_URL}/v1/graph/edge`,
      data: {
        src: src,
        dest: dest,
      },
    }).then((res) => {});
  };

  const pageRankHandler = (selected) => {
    axios({
      method: "get",
      url: `${REACT_APP_SERVER_URL}/v1/page-rank`,
      params: {
        val: selected - 1,
      },
    }).then((res) => {
      setPageRankVal(res.data[0]);
    });
  };
  const resetGraph = () => {
    axios({
      method: "delete",
      url: `${REACT_APP_SERVER_URL}/v1/graph/`,
    }).then((res) => {});
    dispatch({
      type: "deleteGraph",
    });
    addNodeApiCall();
    window.location.reload();
  };
  return (
    <div className="sidebar-component-wrapper">
      <Button className="add-node-btn" onClick={addNodeHandler}>
        Add Node
      </Button>
      <Button
        className="add-node-btn"
        onClick={() => setAddEdgeVisible(!addEdgeVisible)}
      >
        Add Edge
      </Button>
      <Button className="add-node-btn" onClick={() => resetGraph()}>
        Reset Graph
      </Button>
      {addEdgeVisible && (
        <AddEdgeComponent
          getValues={(values) => handleEdgeValues(values)}
          maxValue={state.nodes.length}
        />
      )}
      <PageRankOptions
        maxValue={state.nodes.length}
        getSelected={(selected) => pageRankHandler(selected)}
      />
      {pageRankVal && <> Page Rank is {pageRankVal}</>}
    </div>
  );
};
export default SideBar;
