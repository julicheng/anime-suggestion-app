import React from "react";
import Result from "./Result";

const Results = props => {
  return props.results.map(result => {
    return <Result key={result.id} result={result.id} />;
  });
};

export default Results;
