import React, { useEffect, useState } from "react";

function Menubar({ activeItem, setActiveItem }) {
  // Define state to hold the active item
  const [active, setActive] = useState(activeItem);

  // Load the active item from local storage when component mounts
  useEffect(() => {
    const storedItem = localStorage.getItem("activeItem");
    if (storedItem) {
      setActive(storedItem);
    }
  }, []);

  // Function to handle click on a navigation item
  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Set the clicked item as active
    setActive(itemName); // Update the active state
    localStorage.setItem("activeItem", itemName); // Update local storage
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand fs-2 mx-4 my-2 text-white">
            Imart store
          </div>
          <div className="float-end fs-8 mx-5 ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div
                    className={`nav-link text-white ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("home")}
                  >
                    Home
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link text-white ${
                      active === "ourproduct" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("ourproduct")}
                  >
                    Our Products
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link text-white ${
                      active === "aboutus" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("aboutus")}
                  >
                    About Us
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link text-white ${
                      active === "contactus" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("contactus")}
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menubar;
