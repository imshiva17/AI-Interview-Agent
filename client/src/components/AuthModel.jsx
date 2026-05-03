import React from "react";
import { useSelector } from "react-redux";

const AuthModel = ({ onclose }) => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="fixed inset-0 z-999 items-center justify-center bg-black/10 backdrop-blur-sm px-4 "></div>
  );
};

export default AuthModel;
