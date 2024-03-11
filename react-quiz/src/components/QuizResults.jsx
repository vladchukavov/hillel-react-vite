import Store from "../store/index.js";
function QuizResults({result, show}) {
    const restartQuiz = () => {
        window.location.reload()
    };
    return (
        <section className={`quiz__result ${show >= Store.quiz.questions.length ? '--show' : ''}`}>
            <h3 className="quiz__summary">
                Ви відповіли правильно на {result} із {Store.quiz.questions.length} запитаннь
            </h3>
            <button className={'quiz__button'} onClick={restartQuiz}>
                Почати квіз з початку?
            </button>
        </section>
    )
}

export default QuizResults


