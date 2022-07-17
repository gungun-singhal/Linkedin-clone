import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./feed";
import Widget from "./widget";
import Login from "./Login";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";
import { loginuser, logoutuser, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // already login
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // logout
        dispatch(logoutuser());
      }
    });
  }, []);
  // console.log(user);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar className="left" />
            <Feed className="main" />
            <Widget className="right" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
