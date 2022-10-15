/**  @jsxImportSource @emotion/react*/
import { css } from "@emotion/react"
import { useEffect, useState } from 'react'

const Score = ({  newScore }) => {
  // const [score, setScore] = useState(20)

  // useEffect(() => {
  //   onScoreUpdate(score)
  // }, [score])

  return (


    <div
    css={css`
      span {
        font-weight: 400;
        color: var(--color-grey-dark);
      }
    `}
  >
    <h2 className="test">
      Score: <span>{newScore}</span>
    </h2>
  </div>
)
}

export default Score