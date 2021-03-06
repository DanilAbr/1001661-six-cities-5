import React from 'react';
import PropTypes from 'prop-types';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../utils/const';
import {Link} from 'react-router-dom';


const Header = ({type, authorizationStatus}) => {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const userLogin = localStorage.getItem(`login`);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/"
              className={`header__logo-link${type === `isMain` ? ` header__logo-link--active` : ``}`}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuth ? `/favorites` : `/login`}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span
                    className="header__user-name user__name"
                  >
                    {!isAuth ? `Sing In` : userLogin}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  type: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
  };
};


export {Header};
export default connect(mapStateToProps)(Header);
