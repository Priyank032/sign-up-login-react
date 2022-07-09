import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import DbaDropdown from './DbaDropdown';
const Dropdown = ({ isOpen, toggle }) => {
  const history = useNavigate();
    return<>
    <DbaDropdown isOpen={isOpen} toggle={toggle} /></>
       
}

export default Dropdown
