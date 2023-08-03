import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const ProfilePage = React.lazy(() => import("./pages/MikaProfilePage"));
const VideoPage = React.lazy(() => import("./pages/MikaVideoPage"));
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="./MikaProfilePage" />}
            />
            <Route path="/MikaProfilePage" element={<ProfilePage />} />
            <Route path="/MikaVideoPage" element={<VideoPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
