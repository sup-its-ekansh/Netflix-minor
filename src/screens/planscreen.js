import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { auth } from '../firebase';
import { selectUser } from "../features/userSlice";
import './planscreen.css'
import Plans from './Plans'
const Planscreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>

            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <Plans/>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planscreen;
