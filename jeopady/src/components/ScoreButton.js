/**  @jsxImportSource @emotion/react*/
import { css } from "@emotion/react"
import React from 'react'
import Button from './Button'

const ScoreButtons = ({ onScoreIncrement ,onScoreDecrement,onScoreReset}) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        button {
          background: inherit;
          border: 1px solid var(--color-dark);
          padding: 0.5rem;
          width: 100%;
          margin: 0.25rem;
          border-radius: var(--border-radius);
        }
      `}
    >
      <button onClick={onScoreIncrement}>Increase</button>
      <button onClick={onScoreDecrement}>Decrease</button>
      <button onClick={onScoreReset}>Reset</button>
      
    </div>
  )
}

export default ScoreButtons