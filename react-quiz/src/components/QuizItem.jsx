import Store from "../store/index.js";
import QuizAnswer from "./QuizAnswer.jsx";

function QuizItem({current, chooseAnswer}) {
  return (
    <>
      <h2 className="quiz__question">
        {Store.quiz.questions[current].title}
      </h2>
      <ul className="quiz__options">
        {Store.quiz.questions[current].answers.map((item, index) => (
          <QuizAnswer key={index} item={item} id={index} callback={chooseAnswer} />
        ))}
      </ul>
    </>
  )
}

export default QuizItem