import React, { useEffect, useState } from 'react';
import Sitebar from './Sitebar/Sitebar';


const App = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const body = document.body;
    const menu = body.querySelector(".menu");
    const menuItems = menu.querySelectorAll(".menu__item");
    const menuBorder = menu.querySelector(".menu__border");

    function clickItem(item, index) {
      menu.style.removeProperty("--timeOut");

      // Remove "active" class from all items
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      item.classList.add("active");
      setActiveItem(item);
      offsetMenuBorder(item);
    }

    function offsetMenuBorder(activeItem) {
      if (activeItem) {
        const offsetActiveItem = activeItem.getBoundingClientRect();
        const left =
          Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) +
          "px";
        menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
      }
    }

    offsetMenuBorder();

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => clickItem(item, index));
    });

    window.addEventListener("resize", () => offsetMenuBorder(activeItem));

    return () => {
      // Cleanup event listeners on component unmount
      menuItems.forEach((item) => {
        item.removeEventListener("click", () => clickItem(item));
      });

      window.removeEventListener("resize", () => offsetMenuBorder(activeItem));
    };
  }, [activeItem]);


  return (
    <div>


   <Sitebar/>
    </div>
  );
};

export default App;
