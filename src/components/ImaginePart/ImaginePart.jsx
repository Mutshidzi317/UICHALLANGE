import React from 'react';
import styles from './imaginepart.module.css';

function ImaginePart() {
  return (
    <div className={styles.container}>
      <div className={styles['text-section']}>
        <h1>
          Just imagine seeds <br />and summer in <br />gel sunshine.
        </h1>
      </div>
      <div className={styles['image-section']}>
        <img src="https://tse2.mm.bing.net/th/id/OIP.BECoMLJRshhNktyWsIi8oQHaHa?pid=Api&P=0&h=220" alt="Fruits" />
      </div>
      <div className={styles['card-section']}>
        <h5>EBEE WOUS BENEFIT.</h5>
        <h3><b/>BENEFIT.</h3>
        <p>With fruit, this pleasure comes <br/> perfectly to motion.</p>
        <button>HEAD MORE</button>
      </div>
    </div>
  );
}

export default ImaginePart;