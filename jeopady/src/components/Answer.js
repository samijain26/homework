import React from 'react'

const Answer = ({answer}) => {
  return (
    <div>
      <h3>Answer:</h3>
      <p>{answer[0]?.answer}</p>
    </div>
  )
}

export default Answer