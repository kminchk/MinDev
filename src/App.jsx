// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/dm-mono/300.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import Header_m from "./Components_common/Header";
import Footer_m from "./Components_common/Footer";
import Home_main from "./Home/main/Home_main";
import HomePage from "./HomePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home-page"
          element={
            <div className="mx-auto">
              <div
                className="flex justify-center flex-col"
                style={{ fontFamily: "DM Mono" }}
              >
                <Header_m />
                <div className="flex justify-center items-center h-96">
                  <div className="w-3/4">
                    <div className="flex justify-center items-center flex-col">
                      <Home_main />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-end ">
                  <Footer_m />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
