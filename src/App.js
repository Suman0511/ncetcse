import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Submission from "./routes/Submission";
import Committee from "./routes/Committees";
import Venue from "./routes/Venue";
import Schedule from "./routes/Schedule";
import Paper from "./routes/Call_for_Paper";
import Contact from "./routes/Contact";
import Registration from "./routes/Registration";
export default function App(){ 
    return (
        <div className="App">
          <Routes>
            <Route path ="/"element={<Home/>}/>
            <Route path ="submission"element={<Submission/>}/>
            <Route path ="committee"element={<Committee/>}/>
            <Route path ="venue"element={<Venue/>}/>
            <Route path ="schedule"element={<Schedule/>}/>
            <Route path ="callforpaper"element={<Paper/>}/>
            <Route path ="contact"element={<Contact/>}/>
            <Route path ="registration"element={<Registration/>}/>
          </Routes>
         <Navbar />
            
        </div>
    );
}