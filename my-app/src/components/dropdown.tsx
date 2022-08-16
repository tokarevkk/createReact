import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";


interface DropdownItemProps {
   icon?: string
   options: Array<Option>
 }
 
 export const Dropdown: React.FC<DropdownItemProps> = ({ options }) => {
   const [isOpen, setIsOpen] = useState(false);
 
   const toggleDropdown = () => {
     setIsOpen(!isOpen);
   }
    
    const dropdownClick = (options: Option) => {
       if (options.value === "Edit") {
          setIsOpen(false)
       } 
          options.onClick()
    }
 
   return (
     <div className="dropdown">
       <div className="dropdown-title" onClick={toggleDropdown}>
         <BiTrash />
       </div>
         {isOpen &&
            <div className="dropdown-list-container">
         {options.map((option: Option) => {
           return(
             <button key={option.value} className= "dropdown-list-btn" onClick={() => dropdownClick(option)} > {option.value}
             </button>
           )
         })}
       </div>}
     </div>
   )
 }