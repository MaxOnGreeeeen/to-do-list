import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { About, Auth, Notes, Registration } from "./pages";
import MainPage from "./pages/MainPage";

const RoutesPage = ({ isAuthorized }) => {
  if (isAuthorized) {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={isAuthorized ? <MainPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/notes"
            element={isAuthorized ? <Notes /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isAuthorized ? <About /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    );
  }
  if (!isAuthorized) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    );
  }
};

export default RoutesPage;
