import './App.css';
import Quote from './Quote';
import Generator from './Generator';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const obj = {
    password : "123"
  }
  
  const handleClick = async() =>{
    try {
      const res = await axios.get('http://localhost:4000/quote/123',obj);
      console.log(res.data)
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className="app">
      <Quote></Quote>
      <Generator></Generator>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
