import React from 'react'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/#">Menu</Link>
        <Link className="p-4" to="/#">About</Link>
        <Link className="p-4" to="/#">Contact</Link>
    </div>
  )
}

export default Dropdown
