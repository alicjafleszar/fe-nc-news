import './NavBar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <div className='nav flex'>
      {/* logo */}
        <div className='logo-container'>
          <Link className='logo' to='/'>NC News</Link>
        </div>

        {/* menu-container */}
        <div className='menu-container menu-container--flex'>
          {/* hamburger menu */}
          <input type="checkbox" id="menu_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          {/* menu */}
          <div className='menu flex'>
            {/* left menu */}
            <ul className='menu__item flex flex__item menu-flex__item--left'>
              <li className='menu__link'><Link to='/articles'>news</Link></li>
              <li className='menu__link'><Link to='/topics'>topics</Link></li>
            </ul>

            {/* right menu */}
            <ul className='menu__item flex flex__item menu-flex__item--right'>
              <li className='menu__link'><Link to='/write'>write</Link></li>
              <li className='menu__link'><Link to='/:username'>username</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar