// Home.js
import React from 'react';
import { name, city } from "../data/data";

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick', textAlign: 'center', marginTop: '20px' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
