import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {
  const [quote, setQuote] = useState("Click on New Quote..");
  
  const handleClick = async() =>{
    try {
      const res = await axios.get('http://localhost:4000/quote/123');
      setQuote(res.data);
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className='card'>
      <div className='quote'>{quote}</div>
      {/* <div className='btn'> */}
        <Button variant="contained" color="error" onClick={handleClick}>New Quote</Button>
      {/* </div> */}
    </div>
  );
}

export default App;
