import React from 'react';
import { Container } from "react-bootstrap"
import "../scss.scss"
import { Link } from "react-router-dom"

const Footer = ({}) => {
  const d = new Date()

  return (
    <div className="bg-dark footer">
    <div className="container mt-3">
      <div className="row">
        {/*Column 1*/}
        <div className="col-xs-2 col-md-4">
          <h4 className="text-light">Products</h4>
          <ul className="list-unstyled row-justify-content-center" >
            <li ><Link to="/home" className="link-secondary col-justify-content-center">Home</Link></li>
            <li ><Link to="/shop" className="link-secondary col-justify-content-center">Shop</Link></li>
            <li ><Link to="/pricing" className="link-secondary col-justify-content-center">Pricing</Link></li>
          </ul>
        </div>
        {/*Column 2*/}
        <div className="col-xs-2 col-md-4 ">
         <h4 className="text-light">Our Work</h4>
            <ul className="list-unstyled text-secondary" >
            <li ><Link to="/partners" className="link-secondary col-justify-content-center">Partners</Link></li>
            <li ><Link to="/projectsOur" className="link-secondary col-justify-content-center">Our Projects</Link></li>
            <li ><Link to="/projects" className="link-secondary col-justify-content-center">Client's Projects</Link></li>
            <li ><Link to="/fanpage" className="link-secondary col-justify-content-center">Fanpage</Link></li>
            </ul>
          </div>
        {/*Column 3*/}
        <div className="col-xs-2 col-md-4">
          <h4 className="text-light">Social</h4>
          <ul className="list-unstyled text-secondary" >
            <li ><Link to="/contact" className="link-secondary col-justify-content-center">Contact</Link></li>
            <li ><a href="#" className="link-secondary col-justify-content-center">Facebook</a></li>
            <li ><a href="#" className="link-secondary col-justify-content-center">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p style= {{ marginTop:"40px", textAlign: "center", whiteSpace: "nowrap"}} className="text-light">Copyright ©{d.getFullYear()} by <br/> Kacper budyka</p>
    </div>
  );
}


export default Footer;
