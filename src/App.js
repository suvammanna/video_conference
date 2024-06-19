import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element= {<h1>Login</h1>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
