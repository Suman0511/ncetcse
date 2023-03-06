import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../asserts/Admin.office.JPG";
import Footer from "../components/Footer";
import Global from "../components/Global";

function Contact(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        hero={ContactImg}
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

export default Contact;