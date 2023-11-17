import './header.scss'
import logo from '../assets/StockSelector.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header__container-div">
      <div className="header__container-logo">
        <Link to="/">
          <img className="header__container-image" width="130px" src={logo} />
        </Link>
      </div>

      <div className="header__container-paragraphs">
        <div className="header__container-paragraph">
          <Link className="header__container-login " to="/login">
            {' '}
            Login{' '}
          </Link>
        </div>
        <div className="header__container-paragraph1">
          <Link className="header__container-profile " to="/profile">
            {' '}
            Profile{' '}
          </Link>
        </div>
        <div className="header__container-paragraph1">
          <Link className="header__container-form " to="/form">
            {' '}
            Form{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
