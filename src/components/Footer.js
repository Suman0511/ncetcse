import "./Footer.css";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <a href="/"><i className="fa-brands fa facebook-square"></i></a>
            <a href="/"><i className="fa-brands fa instagram-square"></i></a>
            <a href="/"><i className="fa-brands fa behance-square"></i></a>
            <a href="/"><i className="fa-brands fa twitter-square"></i></a>
                </div>
            </div> 

            <div className="bottom">
                <div>
                <h4>Home</h4>
                </div>
                <div>
                <h4>Call For Paper</h4>
                </div>
                <div>
                <h4>Registration</h4>
                </div>
                <div>
                <h4>Contact</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;