import React, { useState } from "react";
import "./loginscreen.css";
import SignIn from "./signIn";

const Loginscreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div>
        <img
          className="fixed left-0 w-40 object-contain top-[-9px] p-3"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </div>
      <button
        onClick={() => {
          setSignIn(true);
        }}
        className="fixed right-5 top-5 py-2 px-5 text-white bg-[#e50914] text-xl font-semibold border-none cursor-pointer"
      >
        {" "}
        Sign In
      </button>
      <div className="grad">
        {signIn ? (
          <SignIn />
        ) : (
          <div className="absolute top-[30%] text-center  mx-auto z-[1] text-white p-5 left-0 right-0 ">
            <h1 className="text-6xl mb-5 font-bold">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-4xl font-normal mb-8">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="text-xl font-normal ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="m-5">
              <form>
                <input
                  className="py-4 px-5 outline-none text-black border-none max-w-xl text-lg"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="bg-[#e50914] py-4  px-5 cursor-pointer font-semibold border-none text-lg "
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loginscreen;
