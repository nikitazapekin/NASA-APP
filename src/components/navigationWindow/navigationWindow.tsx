import "./navigationWindow.scss"
import React from "react";
import { arrayOfNavigationConsts } from "../../utils/constNavigation"
import NavigationWindowItem from "../navigationWindowItem/navigationWindowItem"
import { useEffect, useState } from "react";
interface NavigationProps {
 isOpen: boolean,
 setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
     }
     
const NavigationWindow  =({isOpen, setIsOpen}: NavigationProps) => {
  /*  const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const target = event.target as HTMLElement; 
        if(target){
        }
        if (!target) {
            setIsOpen(false);
        }
    } */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          if(target){
if(Array.from(target.classList).join(' ')!="navigationItemFlexItem" && Array.from(target.classList).join(' ')!="navigationWindowItem" 
&& Array.from(target.classList).join(' ')!="navigationWindowItem" 
) {
    setIsOpen(false)
    console.log(false)
}
            }
        };
    if(isOpen){
        document.addEventListener("click", handleClickOutside);
    }
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [isOpen, setIsOpen]);
    
    return (
        <div 
      //  onClick={handleClick} 
        className="navigationWindow"
      
        >
          <div className="triangleWindow"></div>
          {arrayOfNavigationConsts.map((item, index)=> (
            <NavigationWindowItem key={index} item={item} setIsOpen={setIsOpen} />
          ))}
        </div>
    )
}
export default NavigationWindow 