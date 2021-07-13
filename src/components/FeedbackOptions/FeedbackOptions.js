import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback, onShow }) => (
  <ul className={styles.buttonList}>
    {options.map((feedback) => {
      return (
        <li className={styles.buttonItem}>
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              onLeaveFeedback(
                `${feedback[0].toLowerCase()}${feedback.slice(1)}`
              );
              onShow();
            }}
          >
            {feedback}
          </button>
        </li>
      );
    })}
  </ul>
);

export default FeedbackOptions;