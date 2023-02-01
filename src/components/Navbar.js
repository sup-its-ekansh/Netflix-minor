import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const hiddenShow = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", hiddenShow);

    return () => {
      window.removeEventListener("scroll", hiddenShow);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="flex items-center justify-between">
        <img
          onClick={() => history.push("/")}
          className="fixed top-6 left-0 pl-5 cursor-pointer object-contain w-28 "
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        />
        <img
          onClick={() => history.push("/plans")}
          className="w-10 right-5 cursor-pointer top-4 object-contain fixed "
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
