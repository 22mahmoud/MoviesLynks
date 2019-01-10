import React, { useState, useContext, useEffect } from "react";
import { ItemWrapper, MenuWrapper, Wrapper } from "./style";

const DropDownContext = React.createContext();

export const useDropDown = () => useContext(DropDownContext);

export const DropDown = ({ header, children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  let dropDownRef = React.createRef();

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
      window.addEventListener("click", closeDropDown);

      return () => window.removeEventListener("click", closeDropDown);
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
      <Wrapper ref={dropDownRef}>
        {/* eslint-disable-next-line  */}
        <span onClick={toggleDropDownOpen}>{header}</span>
        {children}
      </Wrapper>
    </DropDownContext.Provider>
  );
};

const Menu = ({ children, ...props }) => {
  const { isDropDownOpen } = useDropDown();
  return isDropDownOpen ? (
    <MenuWrapper {...props}>{children}</MenuWrapper>
  ) : null;
};

const Item = ({ children, ...props }) => {
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
  return <ItemWrapper {...props}>{_children}</ItemWrapper>;
};

DropDown.Menu = Menu;
DropDown.Item = Item;
