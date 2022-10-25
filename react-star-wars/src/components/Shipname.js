import React from 'react'

export default function Shipname({ shipNamelist }) {
    return (
      <div>
        <div className="app">
          <h2> Name: {shipNamelist.name}</h2>
        </div>
        <div className="listitem">
          <h3>Model:{shipNamelist.model}</h3>
          <h3> Manufacture: {shipNamelist.manufacturer}</h3>
          <h3>Crew: {shipNamelist.crew}</h3>
          <h3>Passenger:{shipNamelist.passengers}</h3>
        </div>
      </div>
    )
}
