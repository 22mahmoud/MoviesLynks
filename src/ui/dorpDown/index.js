import React, { useState, useContext, useEffect } from "react";
import {
  DropDownWrapper,
  DropDownMenuWrapper,
  DropDownMenuItemWrapper
} from "./style";

const DropDownContext = React.createContext();

export const useDropDown = () => useContext(DropDownContext);

export const DropDown = ({ header, children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = React.createRef();

  const closeDropDown = event => {
    if (dropDownRef.current) {
      if (
        event.target !== dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        isDropDownOpen
      ) {
        setIsDropDownOpen(false);
      }
    }
  };

  useEffect(
    () => {
      window.addEventListener("click", closeDropDown.bind(this));

      return () =>
        window.removeEventListener("click", closeDropDown.bind(this));
    },
    [isDropDownOpen]
  );

  const toggleDropDownOpen = event => {
    event.stopPropagation();
    setIsDropDownOpen(!isDropDownOpen);
  };

  const ctx = {
    isDropDownOpen,
    setIsDropDownOpen,
    toggleDropDownOpen
  };

  return (
    <DropDownContext.Provider value={ctx}>
      <DropDownWrapper ref={dropDownRef}>
        {/* eslint-disable-next-line  */}
        <span onClick={toggleDropDownOpen}>{header}</span>
        {children}
      </DropDownWrapper>
    </DropDownContext.Provider>
  );
};

 const Menu = ({ children, ...props }) => {
  const { isDropDownOpen } = useDropDown();
  return isDropDownOpen ? (
    <DropDownMenuWrapper {...props}>{children}</DropDownMenuWrapper>
  ) : null;
};

 const Item = ({ children }) => {
  const { setIsDropDownOpen } = useDropDown();

  const _children = React.Children.map(children, elm => {
    const originalOnClick = elm.props.onClick;
    return React.cloneElement(elm, {
      onClick: () => {
        setIsDropDownOpen(false);
        if (originalOnClick) {
          originalOnClick.apply(elm);
        }
      }
    });
  });
  return <DropDownMenuItemWrapper>{_children}</DropDownMenuItemWrapper>;
};

DropDown.Menu = Menu;
DropDown.Item = Item;
