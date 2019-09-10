import React from "react";
import Result from "./Result";

const Results = props => {
  return (
    <div className="results">
      {props.results.map(result => {
        return <Result key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
