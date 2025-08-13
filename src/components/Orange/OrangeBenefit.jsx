import React from "react";
import styles from "./OrangeBenefit.module.css";

export default function OrangeBenefit() {
  return (
    <section className={styles.orangeBenefit}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Orange Benefit</h2>
        <div className={styles.textRow}>
          <img
            className={styles.smallImg}
            src="https://i.pinimg.com/736x/e6/7b/d8/e67bd8466d06747fff36f89f75e0be7d.jpg"
          alt="Small orange"
          />
          <div>
            <p className={styles.description}>
              Just recognize seeds and summer in grilled sunshine.
            </p>
            <button className={styles.cta}>Learn More</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.MHIY_eyQKZiWscJy6gbdxAHaE7?pid=Api&P=0&h=220"
          alt="Small orange"
        />
      </div>
    </section>
  );
}