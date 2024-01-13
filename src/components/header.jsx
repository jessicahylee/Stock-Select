import './header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header__container-div">
      <div className="header__container-logo">
        <Link className="header__container-logo" to="/">
          <h3 className="header__container-image" > CRYPTO SELECT </h3>
        </Link>
      </div>

      <div className="header__container-paragraphs">
      <div className="header__container-paragraph">
        <Link className="header__container-link " to="/login">
          {' '}
          Login{' '}
        </Link>
      </div>
      <div className="header__container-paragraph">
        <Link className="header__container-link " to="/profile">
          {' '}
          Profile{' '}
        </Link>
      </div>
      <div className="header__container-paragraph">
        <Link className="header__container-link " to="/form">
          {' '}
          Form{' '}
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Header
