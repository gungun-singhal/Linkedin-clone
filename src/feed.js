import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./post";
import "./css/feed.css";
import firebase from "firebase";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();
  const submitPost = (e) => {
    e.preventDefault();
    alert(input);
    db.collection("posts").add({
      name: user.displayName,
      description: "this is test description",
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(
    () =>
      db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setPost(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        }),
    []
  );

  return (
    <div>
      <div className="feed">
        <div className="feed_input">
          <div className="feed_form">
            <Avatar src={user.photoURL} />
            <form onSubmit={submitPost}>
              <input
                type="text"
                placeholder="Share a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input type="Submit" />
            </form>
          </div>
          <div className="feed_options">
            <div className="options">
              <PhotoIcon style={{ color: "#70b5f9" }} />
              <span>Photo</span>
            </div>
            <div className="options">
              <FeaturedVideoIcon style={{ color: "#7fc15e" }} />
              <span>Video</span>
            </div>
            <div className="options">
              <EventIcon style={{ color: "#e7a33e" }} />
              <span>Event</span>
            </div>
            <div className="options">
              <ArticleIcon style={{ color: "#fc9295" }} />
              <span>Write Article</span>
            </div>
          </div>
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => {
          return (
            <Post
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
