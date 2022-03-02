import React from "react";
import {Link} from "react-router-dom";


function AppInfo(){
    return(
        <>
        <section className="pt-4 pb-3 pb-md-0 pt-md-5">
            <div className="container">
              <h1 class="text-center fw-bold"> Download
                <img className="text-logo px-1" src="assets/images/text-logo.png" alt="Logo" />
                </h1>
              <div className="row justify-content-center pt-1 pt-md-5">
                <div className="col-md-11 col-lg-9">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="info-mobile">
                            <img className="info-mobile--img" src="assets/images/mobile-half.png" alt="mobile" />
                          <div className="overlay-logo">
                            <img className="overlay-logo--img" src="assets/images/main-logo.png" alt="Logo" />
                            <img className="overlay-logo--img" src="assets/images/qr-code.png" alt="Logo" />
                          </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                      <div className="appInfo-card py-4 py-md-0">
                        <h3 className="appInfo-card--title">Download <img className="text-logo px-1" src="assets/images/text-logo.png" alt="Logo" />  mobile application</h3>
                        <p className="appInfo-card--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="m-0 list-unstyled d-flex AppInfo-list">
                          <li>
                            <Link to="" >
                              <img className="appInfo-list--img" src="assets/images/download-1.png" alt="Logo" />
                            </Link>
                          </li>
                          <li>
                            <Link to="" >
                              <img className="appInfo-list--img" src="assets/images/download-2.png" alt="Logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                        
                    </div>
                    </div>
                  </div>
              </div>
              
              
            
          </div>
        </section>
        
        </>
    )
}

export default AppInfo;