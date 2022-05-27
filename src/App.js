import './scss.scss';
import { Routes, Route,  } from "react-router-dom"
import Button from "react-bootstrap/Button"
import  NavBarComp  from "./comp/NavBarComp.js"
import Shop from "./comp/Shop.js"
import Footer from "./comp/footer.js"

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path="/home" element={<Shop/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/pricing" element={<Shop/>}/>
        <Route path="/3.1" element={<Shop/>}/>
        <Route path="/3.2" element={<Shop/>}/>
        <Route path="/3.3" element={<Shop/>}/>
        <Route path="/3.4" element={<Shop/>}/>
        <Route path="/contact" element={<Shop/>}/>
        <Route path="/login" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
