import React, { Fragment } from 'react';
import classes from './Header.module.css';
import logo from '../img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{ basket, user }, dispach] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <Link to='/'>
          <img src={logo} alt='amazon.in' className={classes.header__logo} />
        </Link>

        <div className={classes.header__input}>
          <input type='text' name='input' />
          <SearchIcon className={classes.header__input__searchIcon} />
        </div>

        <div className={classes.header__nav}>
          <Link to={!user && '/login'}>
            <div
              className={classes.header__option}
              onClick={handleAuthentication}
            >
              <span className={classes.header__option__first}>
                {user ? `Hello ${user?.email.split('@')[0]}` : 'Hello Guest'}
              </span>
              <span className={classes.header__option__second}>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>

          <Link to='/orders'>
            <div className={classes.header__option}>
              <span className={classes.header__option__first}>Returns</span>
              <span className={classes.header__option__second}>& Orders</span>
            </div>
          </Link>

          <div className={classes.header__option}>
            <span className={classes.header__option__first}>Your</span>
            <span className={classes.header__option__second}>Prime</span>
          </div>
        </div>
        <div className={classes.header__option__basket}>
          <Link to='/checkout'>
            <span>
              <ShoppingCartIcon />
            </span>
            <span className={classes.header__option_cartcount}>
              {basket?.length}
            </span>
            <span className={classes.header__option_cart}>Cart</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
