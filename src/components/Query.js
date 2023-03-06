import "./query.css";
import "./Querydata";
import logo1 from "../asserts/global.jpg";
import logo2 from "../asserts/GU.jpg";
import logo3 from "../asserts/G20.png";
import logo4 from "../asserts/global.jpg";
import Querydata from "./Querydata";
function Query(){
    return( 
        <div className="query">
            <h1>Query</h1>
            <div className="querycard">
                <Querydata
                heading="Convenor"
                text=""/>

                <Querydata
                heading="Publication Query"
                text=""/>

                 <Querydata
                heading="Registration Query"
                text=""/>     

            </div>
        </div>
    );
}

export default Query;