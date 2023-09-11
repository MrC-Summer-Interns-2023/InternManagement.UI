
import React,{ useState } from "react";

function Task(){
    const [isClicked, setIsClicked] = useState(false);
    const handleUploadClick = () => {
      setIsClicked(true);
    };
    return(
        <div id="task">
            <nav>
            <img src="./App_icon.png"></img></nav>
            <h1>Tasks</h1>
            <button onClick={handleUploadClick}>Upload</button>
        </div>


    )

}

export default Task;