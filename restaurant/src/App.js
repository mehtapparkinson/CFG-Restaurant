import './App.css';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Reservations from './Reservations/Reservations';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Reservations></Reservations>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
