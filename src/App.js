import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Navbar/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>☻
      </Routes>
    </div>
  );
}

export default App;
