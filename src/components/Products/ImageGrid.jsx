import React from 'react';
import styles from './ImageGrid.module.css';

const ImageGrid = () => {
  const items = [
    {
      id: 1,
      image: "https://tse3.mm.bing.net/th/id/OIP.ry_EdBiPrwKQAalxhyqdywHaE7?pid=Api&P=0&h=220",
      title: 'ARCU VOLUT FAT VITAE',
      description: 'Phasellus ligula art',
    },
    {
      id: 2,
      image: "https://tse4.mm.bing.net/th/id/OIP.k0Uqv2I_932eK72-4ANncgHaEO?pid=Api&P=0&h=220",
      title: '$19.99, 90.99€',
      description: 'Orci varius port tortorps',
    },
    {
      id: 3,
      image: "https://tse3.mm.bing.net/th/id/OIP.UynStbOmTQI7-j6ipWGVWwHaEP?pid=Api&P=0&h=220",
      title: 'SFIELY TUN DRRNARD',
      description: 'Ongend sunfiers',
    },
  ];

  return (
    <section className={styles['image-grid-section']}>
      <div className={styles['image-grid']}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles['card-image']} />
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>{item.title}</h3>
              <p className={styles['card-description']}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;