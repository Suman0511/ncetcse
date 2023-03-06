import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../asserts/Admin.office.JPG";
import Query from "../components/Query";
import Footer from "../components/Footer";
import Global from "../components/Global";

function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        hero={HomeImg}
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
        <Destination/>
       <Query/>
       <Global/>
       <Footer/> 
        </>
    );
}

export default Home;