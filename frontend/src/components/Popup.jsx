import React, { useState, useEffect } from "react";
import "./Popup.css"; // CSS

const Popup = () => {
  // State for showing/hiding the popup
  const [showPopup, setShowPopup] = useState(false);

  // useEffect to trigger the popup on page load
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1-second delay before showing the popup
  }, []);

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1>Welcome to FitLife Gym</h1>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-image">
              <img src="img1.webp" alt="Gym Offer" />
            </div>
            <h2>Exclusive Gym Membership Offer!</h2>
            <p>Get 50% off on your first month. Hurry, limited-time offer!</p>
            <button onClick={handleClosePopup}>Claim Offer Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
