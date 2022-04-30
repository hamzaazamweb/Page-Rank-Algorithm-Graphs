import { useState } from "react";

import "./PageRankOptions.css";
const PageRankOptions = ({ maxValue, getSelected }) => {
  const [selected, setSelected] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
    if (selected <= maxValue) {
      setSelected(selected);
      getSelected(selected);
    }
  };
  return (
    <>
      <form className="page-rank-wrapper" id="form-rank">
        <div className="add-edge-input-wrapper">
          <p> Page Rank Node:</p>
          <input
            className="edge-input"
            type="number"
            required
            onChange={(e) => setSelected(e.target.value)}
            max={maxValue}
            min={1}
          />
        </div>

        <input type="submit" className="submit-input" onClick={submitHandler} />
      </form>
    </>
  );
};
export default PageRankOptions;
