import logo from './logo.svg';
import Nav from './Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>} ></Route>
        <Route path="/add" element={<h1>Add Product Component</h1>} ></Route>
        <Route path="/update" element={<h1>Update Product Component</h1>} ></Route>
        <Route path="/logout" element={<h1>Logout Product Component</h1>} ></Route>
        <Route path="/profile" element={<h1>Profile Component</h1>} ></Route>
      </Routes>
      <h1>E-Dashboard</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
