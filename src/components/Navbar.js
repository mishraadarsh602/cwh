// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function Navbar(props) {


    return (
        <nav className={`p-2 px-4 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img alt="logo" src="utility-logo.png" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-0 px-md-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">{props.aboutTextUtils}</NavLink>
                        </li>

                    </ul>
                   
                
                    <div>
                        <div className="form-check form-switch" >
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" style={{color:props.mode==="light"?"#000":"#fff"}}  htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
                        </div>
                    </div>


                </div>
            </div>
        </nav>
    )
}

// Navbar.propTypes={
//     title:PropTypes.string,
//     aboutTextUtils:PropTypes.string
// }


Navbar.defaultProps = {
    title: "TextUtils",
    aboutTextUtils: "About"
}