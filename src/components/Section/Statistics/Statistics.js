import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.stats}>
    <table className={styles.stats__list}>
      <tr>
        <td className={styles.stats__item}>Good😀: </td>
        <td className={styles.stats__list__data}>{good}</td>
      </tr>
      <tr>
        <td className={styles.stats__item}>Neutral😐: </td>
        <td className={styles.stats__list__data}>{neutral}</td>
      </tr>
      <tr>
        <td className={styles.stats__item}>Bad😠: </td>
        <td className={styles.stats__list__data}>{bad}</td>
      </tr>
    </table>
    <span className={styles.stats__line}></span>
    <p className={styles.stats__total}>Total: {total}</p>
    <p className={styles.stats__feedback}>
      Positive feedback: {positivePercentage}%
    </p>
  </div>
);

export default Statistics;
