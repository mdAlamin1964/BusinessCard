import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <Header />
    <Content />
    <Footer />
  </ div>
)
































// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
