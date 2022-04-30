import React, { useState } from "react";
import "./AddEdgeComponent.css";

const AddEdgeComponent = ({ getValues, maxValue }) => {
  const [values, setValues] = useState({
    srcValue: null,
    destValue: null,
  });

  const submitHandler = () => {
    if (
      values?.srcValue &&
      values?.srcValue <= maxValue &&
      values?.destValue &&
      values?.destValue <= maxValue
    ) {
      getValues(values);
      setValues({
        srcValue: null,
        destValue: null,
      });
    }
  };
  return (
    <>
      <form className="add-edge-wrapper">
        <div className="add-edge-input-wrapper">
          <p> Src:</p>
          <input
            className="edge-input"
            type="number"
            required
            onChange={(e) => setValues({ ...values, srcValue: e.target.value })}
            max={maxValue}
            min={1}
          />
        </div>
        <div className="add-edge-input-wrapper">
          <p> Dest:</p>
          <input
            className="edge-input"
            type="number"
            required
            onChange={(e) =>
              setValues({ ...values, destValue: e.target.value })
            }
            max={maxValue}
            min={1}
          />
        </div>
          <input type="submit" className="submit-input" onClick={submitHandler} />
      </form>
    </>
  );
};
export default AddEdgeComponent;
