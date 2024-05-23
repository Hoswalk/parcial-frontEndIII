import React from 'react'
import cardStyle from '../Styles/Card.module.css'

const Welcome = () => {
  return (
    <div className={cardStyle.card}>
      <h2>Welcome to our Languages Form</h2>
      <p>Please tell us your name and your favorite language, it could be programming language or regular language</p>
    </div>
  )
}

export default Welcome