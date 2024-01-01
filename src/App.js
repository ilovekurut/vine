import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
