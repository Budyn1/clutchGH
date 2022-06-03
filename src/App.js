import './scss.scss';
import { Routes, Route,  } from "react-router-dom"
import Button from "react-bootstrap/Button"
import  NavBarComp  from "./comp/NavBarComp.js"
import Shop from "./comp/Shop.js"
import Footer from "./comp/footer.js"
import ContactForm from "./comp/contactForm.js"
import Login from "./comp/Login.js"
import Placeholder from "./comp/placeholder.js"

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path="/home" element={<Shop/>}/>
        <Route path="/shop" element={<Placeholder page={"shop"}/>}/>
        <Route path="/pricing" element={<Placeholder page={"pricing"}/>}/>
        <Route path="/fanpage" element={<Placeholder page={"fanpage"}/>}/>
        <Route path="/partners" element={<Placeholder page={"partners"}/>}/>
        <Route path="/projects" element={<Placeholder page={"client's projects"}/>}/>
        <Route path="/projectsOur" element={<Placeholder page={"projects"}/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/login" element={<Shop/>}/>
        <Route path="/" element={<Shop/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
