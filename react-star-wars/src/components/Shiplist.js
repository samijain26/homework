import React from 'react'
import Shipname from './Shipname'

export default function Shiplist({datalist}) {
  return (
    <div>
     
      {datalist.map(item => {
        return <Shipname key={item.name} shipNamelist={item} />
      })}
    </div>
  )
}
