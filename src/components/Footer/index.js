import React from "react";
import {Link} from "react-router-dom";
import Newsletter from "../Newsletter";
import SocialLinks from "../SocialLinks";

function Footer(){
    return(
        <>
        <footer className="footer-main py-5 bg-dark">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div className="footer-main--logo mb-4">
                    <img src="assets/images/main-logo-2.png" alt="Logo" />
                </div>
                <SocialLinks />
                <ul className="list-unstyled footer-main--links mt-3">
                    <li>
                    <Link href="">
                        <i className="arrow-icon fas fa-chevron-right"></i>  Help Centre
                       
                    </Link>
                    </li>
                </ul>
                </div>
                <div className="col-md-9">
                <div className="row">
                    <div className="col-md-4">
                    <h4 className="fw-bold fs-5 footer-main--title text-capitalize">About SHYPN</h4>
                    <ul className="list-unstyled footer-main--links">
                        <li>
                          <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..</p>
                        </li>
                        <li>
                        
                        </li>
                       
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <h4 className="fw-bold fs-5 footer-main--title text-capitalize">Most popular pages</h4>
                    <ul className="list-unstyled footer-main--links">
                        <li>
                        <Link to="/"> <i className="arrow-icon fas fa-chevron-right"></i> Home</Link>
                        </li>
                        <li>
                        <Link to="/about-us"> <i className="arrow-icon fas fa-chevron-right"></i> About Us</Link>
                        </li>
                        <li>
                        <Link to="/about-us"> <i className="arrow-icon fas fa-chevron-right"></i> How It Work</Link>
                        </li>
                        <li>
                        <Link to="/"> <i className="arrow-icon fas fa-chevron-right"></i>  Shipping Methods</Link>
                        </li>
                        <li>
                        <Link to="/contact-us"> <i className="arrow-icon fas fa-chevron-right"></i>  Contact Us</Link>
                        </li>
                        
                        
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <h4 className="fw-bold fs-5 footer-main--title text-capitalize mb-3">Subscribe to our newsletter</h4>
                    <Newsletter />
                    </div>
                </div>
                </div>
            </div>
            </div>

        </footer>
        </>
    )
}

export default Footer;