import React, { useState } from 'react'
import Sent from './Sent';
import Welcome from './Card';

const Form = () => {
    const [client, setClient] = useState({
        name: '',
        languageName: '',
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [welcome, setWelcome] = useState(true)

    

    const handleName = (event) => setClient({...client, name: event.target.value})
    const handleLanguage = (event) => {
        const trimLanguage = event.target.value.trim();
        setClient({...client, languageName: trimLanguage})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(client.name.length >= 3 && client.languageName.length >= 6){
            setShow(true)
            setError(false)
            setWelcome(false)
        } else{
            setError(true)
            setShow(false)
        }
    }

    console.log(client)
  return (
    <>
        {welcome && <Welcome />}
        {show ? (<Sent client={client} />) : (
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' value={client.name} onChange={handleName}></input>
                <label>Language:</label>
                <input type='text' value={client.languageName} onChange={handleLanguage} />
                <button>Send!</button>
            </form>
        )}{error && (
            <p style={{color: "red"}}>Please, check the information and try again.</p>
        )}
    </>
  )
}

export default Form