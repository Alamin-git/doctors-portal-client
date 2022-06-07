import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Reviews from "./pages/Reviews/Reviews";
import Header from "./pages/Shared/Navbar/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="appointment" element={<Appointment/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="contactUs" element={<ContactUs/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
