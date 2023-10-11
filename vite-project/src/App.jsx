import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('');

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  const handlePostRequest = async (params) => {

    let url
    switch(params) {
      case 'triangle':
        url = 'generate_number_triangle'
        break;
      case 'odd':
        url = 'generate_number_odds'
        break;
      default:
        url = 'generate_number_prime'
    }

    try {
      const response = await fetch(`http://127.0.0.1:3333/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: textInput,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const result = await response.json();
      setData(result.data)
      console.log('POST request was successful:', result);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <>
      <input onChange={handleChange} type="number" placeholder="Type a message..." />

      <div style={{display: 'flex', marginTop: '10px'}}>
        <button onClick={() => handlePostRequest("triangle")}>Generate Segitiga</button>
        <button onClick={() => handlePostRequest("odd")}>Generate Bilangan Ganjil</button>
        <button onClick={() => handlePostRequest("prime")}>Activate Bilangan Prima</button>
      </div>

      <h1>
        Resut: 
      </h1>
      <div>Ini resultnya: 
        {
          data.map((number, index) =>
            <div key={index}>{number}</div>
          )
        }
      </div>
    </>
  )
}

export default App