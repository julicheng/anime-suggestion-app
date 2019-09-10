import React from "react";
import Result from "./Result";

const Results = props => {
  return props.results.map(result => {
    return <Result result={result.id} />;
  });
};

export default Results;
