import { useState } from 'react'
import Score from './Score'
import ScoreButtons from './ScoreButton'

const ScoreWrap = ({ value }) => {
  const [score, setScore] = useState(0)

  const questionValue = value[0]?.value

  // const handleScoreUpdate = currentScore => {  //score from score component and sets the score of this component 
  //   //score wrap which is parent score
  //   setScore(currentScore)
  // }

  const handleScoreIncrement = () => {
    console.log('clicked score increment')
    setScore(currentScore => (currentScore += questionValue))
  }
  const handleScoreDecrement = () => {
    console.log('decreased score')
    setScore(currentScore => (currentScore -= questionValue))
  }
  const handleScoreReset = () => {
    console.log('score reset')
    setScore(0)
  }
  return (
    <div>
      <Score  newScore={score} />
      <ScoreButtons onScoreIncrement={handleScoreIncrement} onScoreDecrement={handleScoreDecrement} onScoreReset={handleScoreReset} />
    </div>
  )
}

export default ScoreWrap






