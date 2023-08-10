import "./qna.css";

export const QuestionsAndOptions=()=>{



    return(
        <div className="qna-container d-flex justify-center direction-col my-text">
            <section className="questions-bar">Marvel</section>
            <div className="ques-score-bar d-flex  direction-row justify-space-between">
                <div className="ques-number">Question. 1/5</div>
                <div className="score-number">Score: 0</div>
            </div>
             <div className="question">Q1. abhi is good</div>
             <div className="options-container d-flex justify-center direction-col align-center">
                <div className="option"> A</div>
                <div className="option"> B</div>
                <div className="option"> C</div>
                <div className="option"> D</div>
             </div> 
            
             <div className="questions-bar-foot d-flex  direction-row justify-space-between ">
                <button className="ques-quit">Quit</button>
                <button className="ques-next">Next</button>
            </div>

        </div>
    )
}