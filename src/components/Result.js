import React from "react";

const Result = props => {
  return (
    <div className="result">
      <p>{props.result.id}</p>
      <p>{props.result.title}</p>
      <p>{props.result.genre}</p>
    </div>
  );
};

export default Result;
