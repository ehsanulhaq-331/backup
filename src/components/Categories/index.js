import React, {useState} from "react";
import ApiCategories from "./ApiCategories";
import {Link} from "react-router-dom";
function Categories(){
    const [categoriesdata,setCategories] = useState(ApiCategories);
    return(
        <>
        <section className="oneApp-section py-5">
            
            <div className="container">
            <h1 class="text-center fw-bold"> Our<span class="text-primary"> Service </span></h1>
            <div className="row pt-4 gy-4">
                {
                   categoriesdata.map((cateElm)=> {
                       const {id,images,title} = cateElm;
                       return(
                           <>
                           <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={id}>
                                <div className="app-card rounded text-center">
                                    <img src={images} alt="Truck" />
                                    <div className="app-card--body d-flex align-items-stretch flex-column">
                                        <Link to="" className="text-uppercase">{title}</Link>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                   
                                </div>
                            </div>
                           </>
                       )
                   }) 
                }
            </div>
            </div>
        </section>
        </>
    )
}

export default Categories;