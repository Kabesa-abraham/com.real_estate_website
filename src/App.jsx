import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App;