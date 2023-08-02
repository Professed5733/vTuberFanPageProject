import React from "react";
import MikaVideoPage from "./pages/MikaVideoPage";
import MikaProfilePage from "./pages/MikaProfilePage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <MikaProfilePage></MikaProfilePage>
      {/* <MikaVideoPage></MikaVideoPage> */}
    </div>
  );
}

export default App;
