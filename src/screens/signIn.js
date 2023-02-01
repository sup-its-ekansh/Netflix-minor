import React, { useRef } from "react";
import "./signin.css";
import {auth} from "../firebase.js"

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser).catch((error) => {
          alert(error.message);
        });
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser).catch((error) => {
          alert(error.message);
        });
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1 className="text-left text-white text-2xl font-bold mb-6">
          Sign In
        </h1>
        <input
          ref={emailRef}
          className="outline-0 text-black h-10 mb-4 border-none rounded py-1 px-4"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="outline-0 h-10 text-black mb-4 border-none rounded py-1 px-4"
          placeholder="Password"
          type="password"
        />
        <button
          className="py-4 px-5 mb-4 text-lg bg-[#e50914] text-white border-none mt-5 cursor-pointer font-semibold rounded"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4>
          <span className="text-gray-500">New to Netflix? </span>
          <span
            className="hover:underline text-white hover:cursor-pointer"
            onClick={register}
          >
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
