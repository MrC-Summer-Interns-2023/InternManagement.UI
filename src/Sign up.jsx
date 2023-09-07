import React from "react";
import 'C:\\Users\\mn17\\login-app\\src\\SignUp.css';



class SignUpPage extends React.Component {
  render() {
    return (
     
        <body>
        <div className="navbar">
        <nav className="icon">
          <img src="./Logo.png" alt="App Logo" className="logo"/>
        </nav>
        </div>

      <div className="center-box">
        <div className="image-container">
          <img src="/Cover image.png" alt="Image" />
      <div className="footer">
              <center>
                <h2>SIGNUP</h2>
                <p>Enter your details to signup</p>
                <br />
              </center>
              <div className="back"></div>

              <input type="name" name="name" placeholder="Enter your name" required />
              <br></br>
              <input type="email" name="email" placeholder="Enter your email" required />
              <br />
              <input type="password" name="password" placeholder="Enter your password" required />
              <br />
              <select type="role" name="role" placeholder="Select your role" required >
              <option value ="Select your role">Select your role</option>
              <option value="user">User</option>
              <option value="Organizer">Organizer</option>
             </select>
             <br/> <br/>

              <button type="submit">SIGNUP</button>
            </div>
          </div>
      </div>
    </body>
    );
  }
}

export default SignUpPage;
