import React from "react";
import Modal from "../Modal/instant-quote";
import {Link} from "react-router-dom";


function NavBar(){
    return(
        <>
        <header className="header-main">
            <div className="navbar-top bg-white my-2 d-none d-md-block">
                <div className="container">
                    <div className="row py-1 align-items-center">
                        <div className="col-md-3">
                            <Link className="main-logo d-none d-md-block" to="/">
                                <img className="main-logo--image" src="assets/images/main-logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="icon-wrapper d-flex flex-wrap align-items-center w-100 mb-2 mb-md-0">
                                  <div className="icon-wrapper--icon">
                                    <i className="far fa-clock"></i>
                                  </div>
                                  <div className="icon-wrapper--content">
                                    <h4>Office Hours</h4>
                                    <p>Mon-Sat : 9AM to 10 PM EST</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="icon-wrapper d-flex flex-wrap align-items-center w-100 mb-2 mb-md-0">
                                  <div className="icon-wrapper--icon">
                                    <i className="fas fa-phone-alt"></i>
                                  </div>
                                  <div className="icon-wrapper--content">
                                    <h4>Call Us</h4>
                                    <p>1-800-000-000</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="icon-wrapper d-flex flex-wrap align-items-center w-100 mb-2 mb-md-0">
                                  <div className="icon-wrapper--icon">
                                    <i className="fas fa-envelope"></i>
                                  </div>
                                  <div className="icon-wrapper--content">
                                    <h4>E-mail Us</h4>
                                    <p>
                                      <a href="#">info@Shypn.com</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark z-index-nav">
            <div className="container">
                <Link className="navbar-brand d-block d-md-none" to="/">
                    <img className="mob-logo" src="assets/images/main-logo.png" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i className="text-white fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto mb-0 my-md-2 my-lg-0 list-unstyled main-navbar-links">
                    <li className="nav-item">
                    <Link className="nav-link" to="/"> <i className="fas fa-home pe-1"></i> Home</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/about-us"> <i className="fas fa-user-shield pe-1"></i> About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/how-it-work"> <i className="fas fa-laptop-code pe-1"></i> How It Works</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/get-instant-quote"> <i className="fas fa-dolly-flatbed"></i> Shipping Methods</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mega-menu-wrapper" to=""> <i className="fab fa-servicestack"></i> Services <i class="fas fa-chevron-down"></i>
                        <div className="mega-menu shadow">
                          <div className="d-flex flex-wrap">
                            <div className="mega-menu-inner">
                              <h5 className="mega-menu-title">Individual</h5>
                              <ul className="mega-menu-list m-0 p-0">
                                <li>
                                  <Link to="">Open Carrier</Link>
                                </li>
                                <li>
                                  <Link to="">Enclosed Carrier</Link>
                                </li>
                                <li>
                                  <Link to="">Cross Country</Link>
                                </li>
                                <li>
                                  <Link to="">Seasonal </Link>
                                </li>
                            </ul>
                            </div>
                            
                            <div className="mega-menu-inner">
                              <h5 className="mega-menu-title">Business</h5>
                              <ul className="mega-menu-list m-0 p-0">
                                <li>
                                  <Link to="">Dealer & Auction</Link>
                                </li>
                                <li>
                                  <Link to="">Fleet Management</Link>
                                </li>
                                <li>
                                  <Link to="">Corporate </Link>
                                </li>
                            </ul>
                            </div>
                            <div className="mega-menu-inner">
                              <h5 className="mega-menu-title">Specialized</h5>
                              <ul className="mega-menu-list m-0 p-0">
                              
                                <li>
                                  <Link to="">Oversized</Link>
                                </li>
                                <li>
                                  <Link to="">Motorcycle</Link>
                                </li>
                                <li>
                                  <Link to="">Alaska</Link>
                                </li>
                            </ul>
                            </div>
                          </div>
                          
                        </div>
                        
                      </Link>
                    </li>
                    
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/faq"> <i className="fas fa-question"></i>  Faq</Link>
                    </li>
                </ul>
                <ul className="list-unstyled mb-0 main-navbar-links">
                    <li className="nav-item">
                        <Link className="nav-link ps-0 pt-0 pb-md-0" to="/contact-us"> <i className="far fa-address-card pe-1"></i> Contact Us</Link>
                    </li>
                </ul>
                
                
                </div>
            </div>
            </nav>
            <div className="fixed-btn">
              <a className="fixed-btn--link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#">Get Instant Quote</a>
            </div>
        </header>

        
       

       
        <Modal />

        </>
    )
}

export default NavBar;