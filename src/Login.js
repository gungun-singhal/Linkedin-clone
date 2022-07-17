import { getDisplayName } from "@mui/utils";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "./features/userSlice";
import "./css/Login.css";
import { auth } from "./firebase";
function Login() {
  const [signup, setsignup] = useState(false);
  const [name, setname] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const Register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Name is required");
    }
    if (!photoURL) {
      return alert("PhotoUrl is required");
    }
    if (!email) {
      return alert("Email is required");
    }
    if (!password) {
      return alert("Password is required");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: userAuth.user.photoURL,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => alert(error));
    setname("");
    setemail("");
    setPhotoURL("");
    setpassword("");
  };

  const SignIn = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Email is required");
    }
    if (!password) {
      return alert("Password is required");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="Loginscreen">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_-yyWuXTuC0w9b0Ip5Myab0d9M23PVI5oX7Dq1M90dENwVDJwPqDjwWYIzeVX-Djpg&usqp=CAU"></img>
        {signup === true ? (
          <form onSubmit={Register}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Profile Picture"
              value={photoURL}
              onChange={(e) => {
                setPhotoURL(e.target.value);
              }}
            />
            <input
              type="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="Password"
              placeholder="Pasword"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input type="submit" value="Sign Up" />
            <h4>
              Already a member?{" "}
              <span onClick={(e) => setsignup(false)}>Login Here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={SignIn}>
            <input
              type="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="Password"
              placeholder="Pasword"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input type="submit" value="Sign IN" />
            <h4>
              Not a member?{" "}
              <span onClick={(e) => setsignup(true)}>Register Here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
