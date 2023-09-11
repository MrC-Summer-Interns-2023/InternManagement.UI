import React, { useState } from "react";
import axios from 'axios';
function Session() {
    const [selectedFile, setSelectedFile] = useState({

        id: '',

        title: '',

        description: '',

        Duration: '',

        Link: ''

    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setSelectedFile({

            ...selectedFile,

            [name]: value,

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        
        axios.post('http://localhost:8080/api/v1/session/createSession', {

            id: selectedFile.id,

            title: selectedFile.title,

            description: selectedFile.description,

            Duration: selectedFile.Duration,

            Link: selectedFile.Link

        })

        .then(response => {
            console.log('Session submitted successfully:', response.data);
            setSelectedFile({

                id: '',

                title: '',

                description: '',

                Duration: '',

                Link: ''

            });

        })

        .catch(error => {

            console.error('Error submitting session:', error);

        });

    };

    return (
            <form className="form" onSubmit={handleSubmit}>
            
            <div id="session">
                <nav>
                <img src="./App_icon.png" alt="App Icon" />
                </nav>
                <h1>Sessions</h1>
                <br/><br/>
                <center>
                <label>id:</label>
                <input type="text" name="id" value={selectedFile.id} onChange={handleInputChange} required />
                <br/><br/>
                <label>title:</label>
                <input type="text" name="title" value={selectedFile.title} onChange={handleInputChange} required />
                <br/><br/>
                <label>description:</label>
                <input type="text" name="description" value={selectedFile.description} onChange={handleInputChange} required />
                <br/><br/>
                <label>Duration:</label>
                <input type="text" name="Duration" value={selectedFile.Duration} onChange={handleInputChange} required />
                <br/><br/>
                <label>Link:</label>
                <input type="text" name="Link" value={selectedFile.Link} onChange={handleInputChange} required /> 
                <br/><br/>
                <button type="submit">Upload</button>
                </center>
            </div>
            </form>
    );
}
export default Session;