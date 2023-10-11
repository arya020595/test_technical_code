import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('');
  const [typeNumber, setypeNumber] = useState('generate_number_triangle');

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
      setypeNumber(url)
      console.log('POST request was successful:', result);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <>
      <input onChange={handleChange} type="number" placeholder="Type a number..." />

      <div style={{display: 'flex', margin: '40px auto', justifyContent: 'center'}}>
        <button onClick={() => handlePostRequest("triangle")}>Generate Number Triangle</button>
        <button onClick={() => handlePostRequest("odd")}>Generate Number Odd</button>
        <button onClick={() => handlePostRequest("prime")}>Generate Number Prima</button>
      </div>

      <h1>
        Resut: 
      </h1>

      <div>
        {
          typeNumber == "generate_number_triangle" ?
            data.map((number, index) =>
              <div key={index}>{number}</div>
            ) :
          data
        }
      </div>
    </>
  )
}

export default App