import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Servicos from "./components/Serviços/Servicos";
import GoogleMapsApi from "./components/GoogleMapsApi/GoogleMapsApi";
import Agendamento from "./components/Agendamento/Agendamento";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel />
      <Servicos />
      <Agendamento/>
      <GoogleMapsApi />
    </div>
  );
}

export default App;
