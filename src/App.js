import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
          <div className='d-flex justify-content-center'>
              <h1 className='p-5'>Pagina Principal</h1>
          </div>
      </div>
    </div>
  );
}

export default App;
/**
 * hooks: axios, useState, useEffect 
 */
