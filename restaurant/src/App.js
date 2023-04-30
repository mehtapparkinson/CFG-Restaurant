
import "./App.css";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Reservations from './Reservations/Reservations';
import Menu from "./Menu/menu";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Menu></Menu>
      <Reservations></Reservations>  
      <Footer></Footer>
    </div>
  );
}

export default App;
