import React, { useState } from "react";
import Content from "./components/Content";
import Menubar from "./components/Menubar";

function App() {
   const [activeItem, setActiveItem] = useState(() => {
     const storedItem = localStorage.getItem("activeItem");
     return storedItem || "home"; // Default active item is 'home'
   });

   const handleItemClick = (itemName) => {
     setActiveItem(itemName);
     localStorage.setItem("activeItem", itemName); // Update local storage
   };

  return (
    <>
      <Menubar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Content activeItem={activeItem} />
    </>
  );
}

export default App;
