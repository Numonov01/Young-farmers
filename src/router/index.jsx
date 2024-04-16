// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Tom from "../pages/User/Tom";
import OptionOne from "./../pages/OptionOne/OptionOne";
import OptionTwo from "./../pages/OptionTwo/OptionTwo";
import TeamOne from "./../pages/Team/TeamOne/TeamOne";
import TeamTwo from "./../pages/Team/TeamTwo/TeamTwo";
import Files from "./../pages/Files/Files";
function Router() {
  return (
    <Routes>
      <Route path="/user/:id" element={<Tom />}></Route>
      <Route path="/OptionOne" element={<OptionOne />}></Route>
      <Route path="/OptionTwo" element={<OptionTwo />}></Route>
      <Route path="/TeamOne" element={<TeamOne />}></Route>
      <Route path="/TeamTwo" element={<TeamTwo />}></Route>
      <Route path="/Files" element={<Files />}></Route>
    </Routes>
  );
}

export default Router;
