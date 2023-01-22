import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import video from "../assests/kula.mp4";

const Header = () => {
  const [demo, setDemo] = useState();

  const HandleDemoSubmit = () => {
    alert("Working");
  };

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link href="#" className="header__nav-item">
            <img
              style={{ width: "30px" }}
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
              alt=""
            />
          </Link>
          <Link href="#" className="header__nav-item">
            Product
          </Link>
          <Link href="#" className="header__nav-item">
            Our Story
          </Link>
          <Link href="#" className="header__nav-item">
            Resources
          </Link>
          <Link style={{ marginLeft: "500px" }} className="header__nav-item">
            <button>Book a demo</button>
          </Link>
        </nav>
      </header>
      <div className="hero">
        <h1 className="hero-title">Your recruitment stack needs a raise</h1>
        <p className="hero-subtitle">
          Kula is a recruitment automation platform that lets you proactively
          reach out and engage with the top talent everywhere. With Kula, you
          have complete control, visibility, and predictability on your entire
          talent pipeline.
        </p>
        <div className="demo">
          <input
            onChange={(e) => setDemo(e.target.value)}
            type="email"
            name="email"
            value={demo}
            placeholder="Enter your work email"
          />
          <button onClick={HandleDemoSubmit}>book a demo</button>{" "}
          <div>
            <video
              ref={videoRef}
              autoPlay={true}
              className="videoplayer"
              loop={true}
              src={video}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
