import React from "react";
import styles from "./Section.module.css";

const Section = ({ title, children }) => (
  <div className="container">
    <section className={styles.section}>
      <h1 className="title">{title}</h1>
      {children}
    </section>
  </div>
);

export default Section;