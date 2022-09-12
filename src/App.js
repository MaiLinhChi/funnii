import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import GamePage from './components/Games/Game';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from './components/AboutUs/AboutPage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/games" element={<GamePage  />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
