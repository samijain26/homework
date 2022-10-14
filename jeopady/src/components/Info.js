import React from 'react'
import { Stats, Answer, Question } from './Import'

const Info = ({ data}) => {
  return (
    <div>
      <Stats stats={data} />
      <Answer answer={data} />
      <Question question={data} />
     
    </div>
  )
}

export default Info
