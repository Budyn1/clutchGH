import './scss.scss';
import { Routes, Route,  } from "react-router-dom"
import Button from "react-bootstrap/Button"
import  NavBarComp  from "./comp/NavBarComp.js"
import Shop from "./comp/Shop.js"
import Footer from "./comp/footer.js"
import ContactForm from "./comp/contactForm.js"


function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path="/home" element={<Shop/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/pricing" element={<Shop/>}/>
        <Route path="/fanpage" element={<Shop/>}/>
        <Route path="/partners" element={<Shop/>}/>
        <Route path="/projects" element={<Shop/>}/>
        <Route path="/projectsOur" element={<Shop/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/login" element={<Shop/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
