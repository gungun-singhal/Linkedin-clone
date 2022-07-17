import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./css/post.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
function post({ name, description, message, photoURL }) {
  return (
    <div>
      <div className="posts">
        <div classNmae="post_header">
          <div className="post_header_left">
            <div className="avatar">
              <Avatar src={photoURL} />
            </div>
            <div className="nilesh">
              <div className="post_profile_details">
                <h3>{name}</h3>
                <p className="gungun">{description}</p>
              </div>
              <div className="moreicon">
                <MoreVertIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="image">
          <img src={photoURL}></img>
        </div>
        <div className="post_footer">
          <div className="post_footer_options">
            <ThumbUpIcon />
            <span>Like</span>
            <CommentIcon />
            <span>Comment</span>
            <ShareIcon />
            <span>Share</span>
            <SendIcon />
            <span>Send</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default post;
