import React from "react";
import "./css/widget.css";
import InfoIcon from "@mui/icons-material/Info";
function widget() {
  return (
    <div className="widget">
      <div className="widget_top">
        <div className="widget_header">
          <h4>LinkedIn News</h4>
          <InfoIcon />
        </div>
        <div className="widget_body">
          <ul className="widget_options">
            <li>
              <h4>Slaying Job search</h4>
              <p>6 days ago</p>
            </li>
            <li>
              <h4>A two pizza rule cutting</h4>
              <p>2 days ago</p>
            </li>
            <li>
              <h4>How to handle a workspace</h4>
              <p>5 days ago</p>
            </li>
            <li>
              <h4>flexi leave is the new flexi</h4>
              <p>3 days ago</p>
            </li>
            <li>
              <h4>Slaying Job search</h4>
              <p>6 days ago</p>
            </li>
            <li>
              <h4>A two pizza rule cutting</h4>
              <p>2 days ago</p>
            </li>
            <li>
              <h4>How to handle a workspace</h4>
              <p>5 days ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default widget;
