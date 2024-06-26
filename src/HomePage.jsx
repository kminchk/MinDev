// src/HomePage.jsx
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    navigate("/home-page");
  };

  return (
    <div className="home-page-container">
      <button className="welcome-button" onClick={handleWelcomeClick}>
        Welcome
      </button>
    </div>
  );
}

export default HomePage;
