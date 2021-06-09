import React, { useState } from 'react'
import Navbar from '../Navbar/Nabvar'
import Hero from '../Hero/Hero';
import Content from '../Content/Content'
import Dropdown from '../Dropdown/Dropdown'
const Home = () => {

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {

        setIsOpen(!isOpen);
    }
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
