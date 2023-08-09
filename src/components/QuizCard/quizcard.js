import "../QuizCard/quizcard.css"

import "../QuizCard/quizcard.css"
export const QuizCard =({category})=>{



    return(
        <div className="quiz-container d-flex direction-col ">

            <div className="quiz-img-box">
                <img className="quiz-img" src={category.imageUrl} alt="quizcard"/>
            </div>
            <div className="cuiz-details">
                <h3 className="my-text">🔥{category.category}🔥</h3>
                <span className="my-text">{category.description}</span>
            </div>
            <button className="quiz-play-now-btn "> Play Now</button>

        </div>
    )
}