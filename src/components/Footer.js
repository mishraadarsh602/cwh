import "./Footer.css";

export default function Footer(props) {
    let myStyle = {
        color: props.mode === "dark" ? "#fff" : "#000"

    };
    return (
        <div className="container" style={myStyle}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        {/* <svg className="bi" width="30" height="24"><use xlink: href="#bootstrap"></use></svg> */}
                    </a>
                    <span className="mb-3 mb-md-0 " style={myStyle}>© 2023 Made by AKM</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" title="Github Profile" target="_blank" href="https://github.com/mishraadarsh602"><img alt="github logo"  className="footer-img" src="github.png" /></a></li>
                    <li className="ms-3"><a className="text-body-secondary" target="_blank" href="https://www.linkedin.com/in/adarsh-mishra-aba8801ab/"><img  alt="linkedin logo" className="footer-img" src="linkedin.png" /></a></li>

                    {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg></a></li> */}
                </ul>
            </footer>
        </div>
    )
}
