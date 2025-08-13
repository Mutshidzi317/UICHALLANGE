import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.signInWrapper}>
        <button className={styles.signInBtn}>Sign In</button>
      </div>
      <div className={styles.textContent}>
        <h4 className={styles.subtitle}>Premium Restaurant</h4>
        <h1 className={styles.title}>
        Anida<br/> Dedelay
        </h1>
        <p className={styles.description}>
          BEST HEALTHY SALAD SERVERD <br/> IN OUR RESTAURANT
        </p>
        <button className={styles.cta}>Learn More</button>
      </div>
    </section>
  );
}