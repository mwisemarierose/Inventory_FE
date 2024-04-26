// App.js
import React from 'react';
import './App.scss'; // Import SCSS file for styling
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpeg";
import skirt from "../../assets/skirt.jpg";
import pant from "../../assets/pant.jpg";
import shirt from "../../assets/T-shirt.jpg";
import hat1 from "../../assets/hat1.jpg";
import dress1 from "../../assets/dress1.jpg"; 
import hat2 from "../../assets/hat2.jpg"; 
import Footer from "../../components/footer/Footer";

function Home1() {
  const clothesData = [
    { image: pant, title: "Cargo pants" },
    { image: skirt, title: "Skirt" },
    { image: shirt, title: "Black T-shirt" },
    { image: dress1, title: " Baby dress" },
    { image: hat1, title: " Classic hat" },
    { image: hat2, title: "Hat" },
    // Add more clothes data as needed
  ];

  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="company-name"  style={{color:"#800000",fontFamily:"sans-serif"}}>KIGALI MONTREAL DESIGN</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <div className="main-content">
        {/* Image covering the rest of the page */}
        <img src={img1} alt="Cover" className="cover-image"  style={{height:"auto"}}/>
      </div>
      <div className="clothes-container">
        {/* Cards containing clothes images and titles */}
        {clothesData.map((clothes, index) => (
          <div className="card" key={index}>
            <img src={clothes.image} alt={`Clothes ${index + 1}`} />
            <h3>{clothes.title}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home1;
