import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import logo from "../../assets/logo.jpeg";
import back from "../../assets/back.jpg";
import img1 from "../../assets/img1.jpeg";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          {/* <RiProductHuntLine size={35} /> */}
          <img src={logo} 
          style={{ width: "50px", height:"auto",marginLeft:"0px" }}
          />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* <h3 style={{marginLeft:"250Ppx",color:"white"}}>KIGALI MONTREAL DESIGN Inventory {"&"} Stock Management Solution</h3> */}
    </div>
  );
};
// image under the nav bar to cover the whole page with inline styling to cover the whole rest of the page
<img src={back} alt="hero" className="hero-img" style={{width:"100%",height:"100vh"}} />





export default Home;