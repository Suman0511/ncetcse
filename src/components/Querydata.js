import Query from "./Query";
import "./query.css";


function Querydata(props){ 
    return(
        <div className="q-card">
           <div className="q-image">
           </div>
           <h4>{props.heading}</h4>
           <p>{props.text}</p>
        </div>
    );
}

export default Querydata;