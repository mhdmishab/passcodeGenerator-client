import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Loginpage from "../Pages/Loginpage";
import SignupPage from "../Pages/SignupPage";





const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path='/sign-up' element={<SignupPage/>}></Route>
      </Routes>
    </div>
  );
};

export default Router;