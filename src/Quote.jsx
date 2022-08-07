import React from 'react'
import quotes from './quotes.txt';

export const generateQuote = async () => { 
  let quote = "";
  await fetch(quotes)
    .then((response) => response.text())
    .then((result) => {
      const quotearr = result.split("\n");
      quote = quotearr[Math.floor(Math.random() * quotearr.length)];
    });
  return quote;
};

const Quote = () => {
  return (
    <div>Quote</div>

  )
}

export default Quote