import React from 'react';


class RegisterPage extends React.Component {
  render() {
    return (
      <div>
         <nav className="icon">
          <img src="./App_icon.png"></img>
          {/* <a> <img src="./user.png"></img></a> */}
        </nav>
        <form>
          <div className="form">
             
            <div className="img">
              <img src="./internimage.png" alt="Team Collaboration" />
            </div>
          

            <div className="footer">
              <center>
                <h2>SIGN UP</h2>
                <p>Enter your details to Sign Up</p>
                <br></br>
              </center>

              <input type="text" name="name" placeholder="Enter your full name" required />
              <br /><br />
              <input type="email" name="email" placeholder="Enter your email" required />
              <br /><br />
              <input type="password" name="password" placeholder="Enter your password" required />
              <br /><br />
              <input type="password" name="confirmPassword" placeholder="Confirm password" required />
              <br /><br />
              <button type="submit">SIGN UP</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
