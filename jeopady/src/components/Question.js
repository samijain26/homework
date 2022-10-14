/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import Button from './Button'

const Question = ({ question }) => {
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [active, setActive] = useState(true)

  const handleShowQuestion = () => {
    console.log('clicked')
    setActive(current => !current)
  }

  return (
    <div
      css={css`
        .hidden {
          display: none;
        }
      `}
    >
      <button onClick={handleShowQuestion}>Reveal Question</button>
      <p className={active ? 'hidden' : ''}>{question[0]?.question}</p>
    </div>
  )
}

export default Question