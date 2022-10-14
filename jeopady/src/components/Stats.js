import React from 'react'

const Stats = ({ stats }) => {
    const value = stats[0]?.value
  return (
    <div>
      <h3>Category:{stats[0]?.category.title} </h3>
      <h3>value:{value ? value :'No Value'} </h3>
    </div>
  )
}

export default Stats