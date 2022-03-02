import React from "react";
import {Link} from "react-router-dom";
function SocialLinks(){
    return(
        <>
            <ul className="list-unstyled d-flex footer-main--social-link m-0">
                <li>
                <Link to=""><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li>
                <Link to=""><i className="fab fa-twitter"></i></Link>
                </li>
                <li>
                <Link to=""><i className="fab fa-linkedin-in"></i></Link>
                </li>
                <li>
                <Link to=""><i className="fab fa-youtube"></i></Link>
                </li>
                <li>
                <Link to=""><i className="fab fa-instagram"></i></Link>
                </li>
            </ul>
        </>
    )
}
export default SocialLinks;