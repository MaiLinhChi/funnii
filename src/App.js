import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Home from './components/Home/Home';
function App() {
  return (
    <Layout style={{backgroundColor:'white'}}>
      <Header>
        <Header></Header>
      </Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer>
        <Footer></Footer>
      </Footer>
    </Layout>

  );
}

export default App;
