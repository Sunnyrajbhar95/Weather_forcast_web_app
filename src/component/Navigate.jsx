import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function Navigate() {
  return (
    <div className='routes'>
         <NavLink className="link" to='/'>Your Weather</NavLink>
         <NavLink  className="link" to='/search'>Search Weather</NavLink>
    </div>
  )
}
