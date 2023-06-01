import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='flex footer'>
        <h2 className='footer__logo'>NC News</h2>
        <div className='flex footer__links'>
          <div className='site-nav flex__item flex__item--left'>
            <h3>usefull links</h3>
            <ul>
              <li className="footer__link">
                <Link to='/articles'>news</Link>
              </li>
              <li className="footer__link">
                <Link to='/topics'>topics</Link>
              </li>
              <li className="footer__link">
                <Link to='/write'>write</Link>
              </li>
              <li className="footer__link">
                <Link to='/:username'>your account</Link>
              </li>
            </ul>
            </div>
            <div className='contact-info flex__item flex__item--right'>
              <h3>contact</h3>
              <ul>
                <li>name</li>
                <li>email</li>
                <li>github</li>
                <li>linkedin</li>
              </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer