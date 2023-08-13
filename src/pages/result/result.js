import "./result.css";
import { Navbar } from "../../components";
import { Fragment } from "react";
import { useQuiz } from "../../context/index";

export const Result = () => {
  const { score } = useQuiz();
  return (
    <Fragment>
      <Navbar />
      <div className="result-bar my-text d-flex justify-center align-center direction-col">
        <div className="result-head"> Score</div>
        <h5 className="result-score">{score}</h5>
      </div>
    </Fragment>
  );
};
