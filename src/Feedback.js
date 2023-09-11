import { useState } from "react";
import Nextpage from "./components/Nextpage";


function Feedback(){
    const[showNextPage,setshowNextPage]=useState(false);

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



    // import React from 'react';
// import React, { Component } from 'react';

// import Nextpage from './Nextpage';


// class Feedbackform extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showNextpage: false,
//     };
//   }

//   handleButtonClick = () => {
//     // Set the state to show the next page when the button is clicked
//     this.setState({ showNextpage: true });
//   };

//   render() {
//     if (this.state.showNextpage) {
//       // Render the NextPage component when showNextPage is true
//       return <Nextpage />;
//     }
//     return (
     
//       <div id="feedback">
        
//         <nav>
//           <img src="./App_icon.png"></img>
//           {/* <a> <img src="./user.png"></img></a> */}
//         </nav>
        
//         {/* <div class="sidebar">
//           <a> <img src="./agenda.png"></img></a>
//           <a> <img src="./session.png"></img></a>
//           <a> <img src="./task.png"></img></a>
//           <a> <img src="./feedback.png"></img></a>
          
//         </div> */}

//         <h1>Feedback</h1>
//         <div id="foot">
//         <p>Give Feedback to the internship program</p>
//         <textarea rows="13" cols="100" placeholder="Type your Feedback here"></textarea>
//         <br />
//         <br />
//         <button onClick={this.handleButtonClick}>Submit</button>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default Feedbackform;

    

}
 export default Feedback;