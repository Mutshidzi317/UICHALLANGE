// TopNavBar.js
import React from 'react';
import styles from './TopNavBar.module.css';

export const TopNavBar = () => {
  return (
    <nav className={styles['top-navbar']}>
      <div className={styles.logo}> LOGO</div>

      <ul className={styles['nav-links']}>
        <li>Home</li><b/>
        <li>Menu</li><b/>
        <li>Pages</li><b/>
        <li>Blog</li><b/>
        <li>Contact Us</li>
      </ul>

      <div className={styles['nav-icons']}>
        <i className="fas fa-user">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png"
            className={styles.cartIconn}
            alt="cart"
          />
        </i>
        <i className="fas fa-shopping-cart">
          <img
            src="https://cdn-icons-gif.flaticon.com/15547/15547234.gif"
            className={styles.cartIcon}
            alt="cart"
          />
        </i>
      </div>
    </nav>
  );
};

export default TopNavBar;
