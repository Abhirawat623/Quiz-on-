import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context";
import "./qna.css";

export const QuestionsAndOptions=({quizData})=>{

const [currentQuiz]= quizData;
const {category,quiz,question}=currentQuiz;
const {index,score,quizDispatch}= useQuiz();
const navigate= useNavigate();
const handleNextButton=()=>{
    if(index!== quiz.length-1){
quizDispatch({
    type:"NEXT QUESTION"
})}
else{
    quizDispatch({
        type:"SUBMIT",
       
    })
    navigate("/result")
}
}

    return(
        <div className="qna-container d-flex justify-center direction-col my-text">
            <section className="questions-bar">{category}</section>
            <div className="ques-score-bar d-flex  direction-row justify-space-between">
                <div className="ques-number">Question: {index+1}/{quiz.length}</div>
                <div className="score-number">Score:{score}</div>
            </div>
             <div className="question">{quiz[index].question}</div>
             <div className="options-container d-flex justify-center direction-col align-center">
                {
                    quiz[index].options.map(({id,option,isRight})=>
                    <div key={id} className="option">{option}</div>)
                }
                
             
            
            
             </div> 
            
             <div className="questions-bar-foot d-flex  direction-row justify-space-between ">
                <button className="ques-quit">Quit</button>
                <button className="ques-next" onClick={handleNextButton}>
                    {index===quiz.length-1 ?"Submit":"Next"}
                    </button>
            </div>

        </div>
    )
}