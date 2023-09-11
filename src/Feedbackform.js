import React,{ useState } from "react";
import Nextpage from "./Nextpage";


function Feedbackform(){
    const[showNextPage,setshowNextPage]=useState("");

    const handleButtonClick = () =>{
        setshowNextPage(true);
    }

   
    if(showNextPage){
        return <Nextpage/>;
    }
    return(
        <div id="feedback">
          <nav>
           <img src="./App_icon.png"></img></nav>
          <h1>Feedback</h1>
          <div id="foot">
            <p>Give Feedback to the internship program</p>
            <textarea rows="13" cols="100" placeholder="Type your Feedback here"></textarea>
            <br />
            <br />
            <button onClick={handleButtonClick}>Submit</button>
          </div>
        
        </div>
    );

}
export default Feedbackform;


