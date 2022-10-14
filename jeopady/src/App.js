//import logo from './logo.svg';

/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { Button, Header, Info, ScoreWrap } from './components/Import'

function App() {
  const [questionData, setQuestionData] = useState('')

  const getQuestionHandler = async () => {
    try {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()
    setQuestionData(data)
  }
  catch(err){
    console.error(err)
  }
}
// useEffect(() =>{
//   getQuestionHandler()
// },[])

  return (
    <div>
      <Header text="Jeopady" />
      <ScoreWrap  value={questionData}/>
      <Button onGetQuestion={getQuestionHandler}>Play</Button>
      <Info data={questionData}/>
    </div>
  )
}

export default App