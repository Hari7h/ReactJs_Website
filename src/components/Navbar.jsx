import {useState} from 'react';

import {close, logo, menu}  from "../assets";

import {navLinks} from "../constants";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (

    <nav className='w-full flex py-4 justify-between 
    items-center'>
      <img src={logo} alt="bi" className='w-[152px] h-[118px] ' />
      <ul className=' list-none sm:flex hidden
      justify-end items-center flex-1 '>
        {navLinks.map(({title, path}, index) => (
          <li key={index}
          className={`font-ibm font-medium cursor-pointer 
           text-lg
           ${index === navLinks.length -1 ? 'mr-16' : 'mr-10'}
            text-black `}>
            <NavLink to={path}>
              {title}
            </NavLink>
          </li>
        )
        )}
      </ul>

      <div className=' sm:hidden flex justify-end items-center flex-1'>
        <img src={toggle? close: menu}
        alt='menu'
        className='w-[22px] h-[22px]  object-contain' 
        onClick={()=> setToggle((prev) => !prev)}
        />

      <div className={`${toggle ? 'flex': 'hidden' } p-8 
      bg-black-gradient absolute top-20 right-0 mx-5 my-4
      min-w-[160px] rounded-xl sidebar `}>

      <ul className=' list-none flex flex-col 
        justify-end items-center flex-1 '>

        {navLinks.map(({title, path}, index) => (
          <li key={index}
          className={`font-ibm font-medium cursor-pointer 
           text-lg 
           ${index === navLinks.length -1 ? 'mb-2' : 'mb-4'}
            text-slate-100 `}>

            <NavLink to={path}>
              {title}
            </NavLink>
          </li>
        )
        )}
      </ul>

      </div>
      </div>
          
    </nav>
  ) 
}
