import Store from "../store/index.js";
function QuizProgress({currentWidth}) {
    return (
        <div className="quiz__progress">
            <div style={{width: currentWidth / Store.quiz.questions.length * 100 + '%'}}
                 className="quiz__progress-inner"></div>
        </div>
    )
}
export default QuizProgress
