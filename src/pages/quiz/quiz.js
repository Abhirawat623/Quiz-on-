import { QuestionsAndOptions } from "../../components/questionsAndOpt/qna";
import { Fragment, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import { useQuiz } from "../../context/index";
export const Quiz = () => {
  const { quizcategory, quiz, quizDispatch } = useQuiz();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("https://quiz-on-backend-lxnf.vercel.app/quiz", {
          headers: { authorization: localStorage.getItem("token") },
        });
        console.log({ data });
        const filterData =
          data &&
          data.length > 0 &&
          data.filter(({ category }) => category === quizcategory);
        console.log(filterData);
        if (filterData && filterData.length > 0) {
          quizDispatch({
            type: "SET_QUIZ",
            payload: filterData,
          });
          localStorage.setItem("quiz", JSON.stringify(filterData));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Fragment>
      <Navbar />
      {quiz && quiz.length > 0 && <QuestionsAndOptions quizData={quiz} />}
    </Fragment>
  );
};
