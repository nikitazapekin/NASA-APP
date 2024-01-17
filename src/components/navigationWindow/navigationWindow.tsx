import "./navigationWindow.scss"
import React from "react";
import { arrayOfNavigationConsts } from "../../utils/constNavigation"
import NavigationWindowItem from "../navigationWindowItem/navigationWindowItem"
import { useEffect, useState } from "react";
import { NavigationProps } from "./Props";
const NavigationWindow = ({ isOpen, setIsOpen }: NavigationProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        if (Array.from(target.classList).join(' ') != "navigationItemFlexItem" && Array.from(target.classList).join(' ') != "navigationWindowItem"
          && Array.from(target.classList).join(' ') != "navigationWindowItem"
        ) {
          setIsOpen(false)
        }
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className="navigationWindow"
    >
      <div className="triangleWindow"></div>
      {arrayOfNavigationConsts.map((item, index) => (
        <NavigationWindowItem key={index} item={item} setIsOpen={setIsOpen} />
      ))}
    </div>
  )
}
export default NavigationWindow 