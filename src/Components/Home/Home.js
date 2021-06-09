import React, { useState } from 'react'
import Navbar from '../Navbar/Nabvar'
import Hero from '../Hero/Hero';
import Content from '../Content/Content'
import Dropdown from '../Dropdown/Dropdown'
import { useEffect } from 'react';
const Home = () => {

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {

        setIsOpen(!isOpen);
    }
useEffect(() =>{

const hideMenu =() =>{

    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false)  
      console.log("resize")
    }
};
window.addEventListener('resize', hideMenu)
return () =>{
    window.removeEventListener('resize', hideMenu)
}
},[])


  return (
    <div>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown toggle={toggle} isOpen={isOpen}></Dropdown>
      <Hero></Hero>
      <Content></Content>
    </div>
  )
}

export default Home
