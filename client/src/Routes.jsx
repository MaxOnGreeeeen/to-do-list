import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router";

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
          <Route path="*" element={<Navigate to="/" />} />
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
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }
};

export default RoutesPage;
