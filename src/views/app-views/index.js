import React from "react";
import { Route, Routes, Redirect, withRouter } from "react-router-dom";
import AppLayout from "layouts/app-layout";

const Views = () => {
  console.log("abv");
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}></Route>
    </Routes>
  );
};

export default Views;
