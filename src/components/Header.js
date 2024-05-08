import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src="/netflix_logo.png" alt="logo" />
      {user && (
        <div className="flex items-center ">
          <img className="w-12 rounded-lg" alt="image" src={user?.photoURL} />
          <div
            onClick={handleSignOut}
            className="text-sm text-white cursor-pointer"
          >
            (SignOut)
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
