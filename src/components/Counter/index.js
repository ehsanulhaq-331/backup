import React, { useState } from "react";
import ApiCounter from "../../Api/ApiCounter";

function Counter(){
    const [counterData, setCounterData] = useState(ApiCounter);
    console.log(counterData);
    return(
        <>
        <section className="counter-section py-4">
            <div className="container">
                <div className="row">
                    {
                    counterData.map((curElm)=>{
                        const{counterNumber,counterText} = curElm;
                        return(
                            <>
                            <div className="col-md-4">
                                    <div className="counter-section--text text-center">
                                        <h3>{counterNumber}</h3>
                                        <p>{counterText}</p>
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

export default Counter;