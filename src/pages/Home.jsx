import Announcement from "../components'/Announcement";
import Slider from "../components'/Slider";
import React from "react";
import Navbar from "../components'/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
