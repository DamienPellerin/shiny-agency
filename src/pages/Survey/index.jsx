import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  useEffect(() => {
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
