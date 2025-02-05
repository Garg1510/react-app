import React from 'react'


const Home = () => {
    let inputValue;

  return (
    <div>
    <input style = {{padding: 7}} type = "text" placeholder = "enter" 
    onChange={(e)=>{
        inputValue =  e.target.value;
        console.log(inputValue);
    }}
    /></div>
  );
};

export default Home