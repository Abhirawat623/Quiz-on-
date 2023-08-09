import "../QuizCard/quizcard.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"
import "../QuizCard/quizcard.css"
export const QuizCard =({category})=>{
 const {token}= useAuth();

 const navigate = useNavigate();

 const handlePlayButton=()=>{

    if(token){ navigate("/quiz")}
    else{ navigate("/auth/login")}
 }

    return(
        <div className="quiz-container d-flex direction-col ">

            <div className="quiz-img-box">
                <img className="quiz-img" src={category.imageUrl} alt="quizcard"/>
            </div>
            <div className="cuiz-details">
                <h3 className="my-text">🔥{category.category}🔥</h3>
                <span className="my-text">{category.description}</span>
            </div>
            <button className="quiz-play-now-btn" onClick={handlePlayButton}> Play Now</button>

        </div>
    )
}