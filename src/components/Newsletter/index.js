import React from "react";
function Newsletter(){
    return(
      <>
      <form className="row g-3 align-items-center">
        <div className="col-12">
            <input type="email" className="form-control w-100" id="inputEmail" placeholder="info@shypn.com" />
        </div>
        <div className="col-12">
            <a className="btn btn-primary d-inline-block w-100 fw-bold text-uppercase" href="#">Join <i class="fas fa-location-arrow"></i> </a>
        </div>
        
      </form>
        
      </>
    )
}

export default Newsletter;