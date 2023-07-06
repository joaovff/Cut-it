import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
    </div>
  );
}

export default App;
