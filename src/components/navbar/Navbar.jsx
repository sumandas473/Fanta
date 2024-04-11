import React from 'react'
import menu from '../../assets/Menu.png'



function Navbar() {
  return (
    <div className='h-12 w-full  flex flex-row justify-between items-center px-20 text-white fixed'>
        <h1>Fanta</h1>
        
        <div className='flex gap-10 text-white'>
            <h1>Home</h1>
            <h1>Product</h1>
            <h1>Shop</h1>
            <h1>Contact</h1>
        </div>
        <h1>Menu</h1>
       {/* <img src={menu} alt="Menu" className='w-5 h-5'/> */}

    </div>
  )
}

export default Navbar