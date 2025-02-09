import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Share from './pages/Share/Share.jsx';
import Default from './layouts/Default/Default.jsx'
import Header from './components/Header/Header.jsx';


function App() {
  return (   
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home/>}/>
          <Route path="share" element={<Share/>}/>
        </Route>
      </Routes>   
    </>
  )
}

export default App;

