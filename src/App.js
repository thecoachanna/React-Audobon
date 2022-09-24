import React, { useState } from 'react';
import Birds from './Birds/Birds';
import { Route, Routes } from 'react-router-dom';
import BirdDetails from './Birds/BirdDetails';


function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Birds />} />
          <Route path='/details/:id' element={ <BirdDetails /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
