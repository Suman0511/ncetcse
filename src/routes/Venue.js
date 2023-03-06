import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VenueImg from "../asserts/2.jpg";
import Footer from "../components/Footer";
import Global from "../components/Global";

function Venue(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        hero={VenueImg}
        title1="NATIONAL"
        title2="CONFERENCE"
        text1="ON"
        title3="EMERGING"
        title4="TECHNOLOGY"
        text2="IN"
        text3="COMPUTER SCIENCE AND ENGINEERING"
        text4="(NCETCSE-23)"
        text5="CONFERENCE PROCEEDINGS ISBN:"
        buttonText="Registration"
        url="/"
        btnClass="Show"
        /> 
        <Global/>
        <Footer/>
        </>
    );
}

export default Venue;