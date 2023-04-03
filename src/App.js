//Create a react component that inputs a textarea message then performs a fetch request to localhost: 3001 gets back a repsonse as a data.message and displays that message in a box below
import React, { useState } from 'react';
import './App.css';

function App(){
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message})
    })
    .then(res => res.json())
    .then(data => {
      setResponse(data.message)
    })
  }

  return (
    <div className="App">
      <h1>对话 😁 ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <textarea class = "textbox" value={message} 
          placeholder="Hey, ask me something!"
          onChange={e => setMessage(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{response}</p>
      <br></br>
      <h2> FUN facts.</h2>
      <ol>
        <ul>ChatGPT was launched on 30 November 2022.</ul>
        <ul>It is a chatbot that uses GPT-3 to generate responses to user input.</ul>
        <ul>It has a daily of 13 million users.</ul>
      </ol>   
      <br></br>
      <h2> Alternatives / Competitors </h2>
      <h4>Bard - AI</h4>
      <h4>ChatSonic - Writing</h4>
      <h4>CoPilot - Coding</h4>
      <h4>NeevaAI - Search engine</h4>
    </div>
  );
}
export default App;
