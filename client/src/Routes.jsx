import React from "react";

import { Navigate, Redirect, Route, Routes } from "react-router-dom";

import { About, Auth, Notes, Registration } from "./pages";

const RoutesPage = ({ isAuthorized }) => {
  if (isAuthorized) {
    return (
      <div>
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        :
      </div>
    );
  }
  //TODO: solve an issue of redirection
  if (!isAuthorized) {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    );
  }
};

export default RoutesPage;
