import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Home from './components/Home/Home';
import GamePage from './components/Games/Game';
import ReactDOM from "react-dom/client";
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
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>

    // <BrowserRouter>
    //   <Layout style={{ backgroundColor: 'white' }}>
    //     <Header>
    //       <Header></Header>
    //     </Header>
    //     <Content>

    //       <Route>
    //         <Route path='/game' element={<GamePage></GamePage>} />
    //       </Route>
    //       <Home></Home>
    //       <GamePage></GamePage>
    //     </Content>

    //     <Footer>
    //       <Footer></Footer>
    //     </Footer>
    //   </Layout>
    // </BrowserRouter>
  );
}

export default App;
