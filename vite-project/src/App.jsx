import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("null")
  const [textInput, setTextInput] = useState('');

  const handleClickGenerateSegitiga = async (e) => {
    e.preventDefault();
    console.log(textInput);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number: "423423423" })
    };
    const response = await fetch('http://127.0.0.1:3333/generate_number_triangle', requestOptions);
    const data = await response.json();
    setData(data)
  }

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  const handlePostRequest = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/generate_number_triangle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: '234234234',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const result = await response.json();
      console.log('POST request was successful:', result);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <>
      <input onChange={handleChange} type="number" placeholder="Type a message..." />

      <div style={{display: 'flex', marginTop: '10px'}}>
        <button onClick={handlePostRequest}>Generate Segitiga</button>
        <button onClick={handleClickGenerateGanjil}>Generate Bilangan Ganjil</button>
        <button onClick={handleClickGeneratePrima}>Activate Bilangan Prima</button>
      </div>

      <h1>
        Resut: 
      </h1>
      
      <div>Ini resultnya: {data}</div>
    </>
  )
}

export default App