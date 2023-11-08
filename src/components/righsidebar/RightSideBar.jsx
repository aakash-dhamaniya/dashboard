import React from "react";
import "./style/rightsidebar.css";
import { icons } from "./style/data";
function RightSideBar() {
  return (
    <div className="righsidebar">
      <div className="topicons">
        <img src={icons.backarrow} alt="" />
        <img src={icons.verify} alt="" />
      </div>
      <div className="profileinfo">
        <div className="profile">
          <img src={icons.Ellipse} alt="" className="circle-image1" />
          <img src={icons.Group237} alt="" className="circle-image2" />
          <img src={icons.profile} alt="" className="circle-image3" />
        </div>
        <div className="info">
          <p>John Pope</p>
          <p>Lucknow, Uttar pradash</p>
        </div>
      </div>
      <div className="createplan">
        <img src={icons.add_} />
        <p>Create plan</p>
      </div>
    </div>
  );
}
export default RightSideBar;
