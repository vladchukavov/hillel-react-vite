function QuizAnswer({item, id, callback}) {
  return (
    <li className="quiz__item">
      <button className="quiz__selector" onClick={() => callback(id)}
      >
        {item}
      </button>
    </li>
  )
}

export default QuizAnswer