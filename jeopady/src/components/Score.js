import { useEffect, useState } from 'react'

const Score = ({  newScore }) => {
  // const [score, setScore] = useState(20)

  // useEffect(() => {
  //   onScoreUpdate(score)
  // }, [score])

  return (
    <div>
      <h3>Score: {newScore}</h3>
    </div>
  )
}

export default Score