import React, { useState } from 'react';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Icon from './internsync.png';
import './Land.css';
import InternCardList from './InternCardList';

const InternUser= ()=> {
    // State to toggle the sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    // Function to set the active navigation link (you can implement your logic here)
    const setActiveNav = () => {
      // Implement your logic to set the active navigation link here
    };
  
    // Scroll to target element
    const scrollToTarget = (target) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    // Handle navigation click event
    const handleNavClick = (event, target) => {
      event.preventDefault();
      scrollToTarget(target);
      setActiveNav(); // Call setActiveNav to set the active link (implement your logic)
    };

    const internData = [
      {
        address: 'Chennai',
        department: 'Graduate Intern (BE Civil)',
        email: 'kalaimagal@mrc.com',
        gender: 'FEMALE',
        internId: 1,
        name: 'Kalaimagal',
        phone: 1234567890,
        role: 'INTERN',
        profileImage: 'https://github.com/imvenkatesanc/inexpert/blob/main/noPhoto.png?raw=true',
      }];
  return (
    <>
        <div>
        <div className="navbar">
          <div className="navbar-left">
            <img src={Icon} alt="App Icon" className="navbar-logo" />
          </div>
          <div className="nav-center">USER Profile's</div>
          <div className="navbar-right">
            <Link to="/myprofile" className="navbar-link">My Profile</Link>
            <Link to="/admin" className="navbar-link">Admin</Link>
            <Link to="/" className="navbar-link">Logout</Link>
          </div>
        </div>
      <nav>
        <div className="dashboard-container">
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <div id="sidebar-toggle" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sessions" className="nav-link">
                  <FontAwesomeIcon icon={faImages} /> Sessions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link">
                  <FontAwesomeIcon icon={faPaintBrush} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className="nav-link">
                  <FontAwesomeIcon icon={faCar} /> Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    {/* <div className="intern_main_cont">
    <div className="intern-card-list">
      {internData.map((intern) => (
        <div className="intern-card" key={intern.internId}>
          <img src={intern.profileImage} alt={intern.name} className="profile-image" />
          <h2>{intern.name}</h2>
          <p>Email: {intern.email}</p>
          <p>Department: {intern.department}</p>
          <p>Gender: {intern.gender}</p>
          <p>Phone: {intern.phone}</p>
          <p>Address: {intern.address}</p>
        </div>
      ))}
    </div> */}
    <InternCardList/>
    </>
  )
}

export default InternUser;