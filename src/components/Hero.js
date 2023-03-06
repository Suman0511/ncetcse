import "./Hero.css";

function Hero(props){
    return(
        <>
        <div className="{props.cName}">
            <img alt="hero" src={props.hero}/>
             <div className="hero-text">
                <h1>{props.title1}</h1>
                <h1>{props.title2}</h1>
                <p>{props.text1} </p>
                <h1>{props.title3}</h1>
                <h1>{props.title4}</h1>
                <p>{props.text2} </p>
                <p>{props.text3} </p>
                <p>{props.text4} </p>
                <p>{props.text5} </p>
                <a href={props.url}className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>
        </>
    );
}

export default Hero;