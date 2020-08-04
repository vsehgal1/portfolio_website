import React from 'react';
import './App.css';
import { Layout, Header, Content } from 'react-mdl'
import Main from './components/main';
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='headerColor'  scroll
        style={{color:'#947240', fontSize: '40px', fontWeight: 'bold', opacity:'.7'}}>
          Vikram Sehgal
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
