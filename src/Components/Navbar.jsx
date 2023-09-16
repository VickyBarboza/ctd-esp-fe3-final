import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'


const Navbar = () => {
  const{state,dispatch}=useGlobalStates()

  return (
    <nav className={state.theme}>
      <img src='C:\Users\HP\OneDrive\Escritorio\ctd-esp-fe3-final\fe3-final\src\images\dental-clinic-logo-template-dental-care-logo-designs-tooth-teeth-smile-dentist-logo-vector.jpg' alt='logo'/>
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button className='setThemeButton' onClick={() => {
        state.theme==='dark'? dispatch({type: 'light'}): dispatch({type: 'dark'})
      }}>
      Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar