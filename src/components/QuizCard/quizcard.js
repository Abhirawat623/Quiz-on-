import "../QuizCard/quizcard.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"
import "../QuizCard/quizcard.css"
import { useQuiz } from "../../context/index"
export const QuizCard =({quizcategory})=>{
 const {token}= useAuth();
 
 const navigate = useNavigate();

 const {quizDispatch} = useQuiz();

 const {imageUrl,category,description,}= quizcategory;
 const handlePlayButton=()=>{

    if(token){
        
        navigate("/quiz")
        quizDispatch({
            type: "CATEGORY",
            payload:category
        })

}
    else{ 
        navigate("/auth/login")}
 }

    return(
        <div className="quiz-container d-flex direction-col ">

            <div className="quiz-img-box">
                <img className="quiz-img" src={imageUrl} alt="quizcard"/>
            </div>
            <div className="cuiz-details">
                <h3 className="my-text">🔥{category}🔥</h3>
                <span className="my-text">{description}</span>
            </div>
            <button className="quiz-play-now-btn" onClick={handlePlayButton}> Play Now</button>

        </div>
    )
}