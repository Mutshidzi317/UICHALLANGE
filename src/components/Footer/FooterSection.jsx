import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-left']}>
        <img
          src="https://s.yimg.com/fz/api/res/1.2/NlXWR3IqK1la1Qq7emE9vQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTQwMA--/https://i.pinimg.com/736x/39/d1/29/39d129c4961321cc5d3c3cb70d757c06.jpg"
          alt="Berries"
          className={styles['berries-img']}
        />
        <div className={styles['hello-box']}>HELLO.</div>
      </div>

      <div className={styles['footer-middle']}>
        <h2>OUR MENU BENEFIT</h2>
        <div className={styles.benefits}>
          <div className={styles['benefit-item']}>
            <div className={styles.icon}><img src="https://cdn-icons-png.flaticon.com/128/18238/18238776.png" alt="Fresh" /></div>
            <h4>FRESH</h4>
            <p>
              Plays stand <br /> up comedians
            </p>
          </div>
          <div className={styles['benefit-item']}>
            <div className={styles.icon}><img src="https://cdn-icons-png.flaticon.com/128/8136/8136755.png" alt="Vitamin" /></div>
            <h4>VITAMIN</h4>
            <p>
              Naps on sun <br /> porches
            </p>
          </div>
          <div className={styles['benefit-item']}>
            <div className={styles.icon}><img src="https://cdn-icons-png.flaticon.com/128/4949/4949756.png" alt="Towapples" /></div>
            <h4>ORE ANIC</h4>
            <p>
              Towapples <br /> wurults
            </p>
          </div>
        </div>
      </div>

      <div className={styles['footer-right']}>
        <h2>OPENING HOURS</h2>
        <ul>
          <li>
            Monday: <span>17.00 cm x17</span>
          </li>
          <li>
            Tuesday: <span>13.60 cm x17</span>
          </li>
          <li>
            Wednesday: <span>19.00 km x11</span>
          </li>
          <li>
            Thursday: <span>13.00 cm x11</span>
          </li>
          <h2><br/>QUICK LINKS</h2>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;