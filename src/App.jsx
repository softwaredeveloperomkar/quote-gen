import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [quote, setQuote] = useState("omkar is great");
  
  const handleClick = async() =>{
    try {
      const res = await axios.get('http://localhost:4000/quote/123');
      setQuote(res.data);
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className="app">
      <div className="">{quote}</div>
      <button className='btn' onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
