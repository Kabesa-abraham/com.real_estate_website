import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Services from "./components/services/Services";

function App() {
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App;