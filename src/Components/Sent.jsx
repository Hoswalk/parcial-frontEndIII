import React from 'react'

const Sent = ({client}) => {
  return (
    <>
        <h3>We appreciate the information, {client.name}!</h3>
        <h3>Mmm {client.languageName}. Interesting language you choose...</h3>
    </>
  )
}

export default Sent