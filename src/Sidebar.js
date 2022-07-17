import React from "react";
import "./css/sidebar.css";
import { Avatar } from "@mui/material";
import userSlice from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_profile">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
          <div className="profile_details">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
            <p>Coding enthusiast</p>
          </div>
          <div className="profile_stats">
            <span>Who viewed your profile</span>
            <span className="stat_number">20</span>
          </div>
          <div className="profile_stats">
            <span>
              Connection
              <br />
              <b>Grow Your Network</b>
            </span>
            <span className="stat_number">150</span>
          </div>
        </div>
        <div className="sidebar_recent">
          <p>Recent</p>
          <p className="hash">
            <span>#</span>Branding
          </p>
          <p className="hash">
            <span>#</span>marketing
          </p>
          <p className="hash">
            <span>#</span>development
          </p>
          <p className="hash">
            <span>#</span>React-js
          </p>
          <p className="hash">
            <span>#</span>Redux
          </p>
          <p className="hash">
            <span>#</span>Linkedin-clone
          </p>
          <p className="hash">
            <span>#</span>Frontend
          </p>
          <p className="hash">
            <span>#</span>Learning
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
