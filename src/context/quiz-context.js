import { createContext,useContext,useReducer,useEffect } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const initialState ={
    index:0,
    score:0,
    quizcategory:""
}

const QuizContext = createContext();

const QuizProvider =({children})=>{

    const [{index,score,quizcategory},quizDispatch] = useReducer(quizReducer,initialState)

    return(
        <QuizContext.Provider value={{index,score, quizcategory,quizDispatch}}>
            {children}
        </QuizContext.Provider>
    );
};

const useQuiz=()=> useContext(QuizContext);

export{useQuiz,QuizProvider}