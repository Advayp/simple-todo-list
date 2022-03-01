import React from "react";
import styles from "./InputField.module.css";

export const InputField = ({ label, onChange, large = false }) => {
    return (
        <div className={styles.fieldWrapper}>
            <span className={styles.fieldLabel}>{label}</span>
            <label>
                {large ? (
                    <textarea
                        className={`${styles.inputField} ${styles.largeField}`}
                        onChange={onChange}
                        rows={4}
                        cols={50}
                    ></textarea>
                ) : (
                    <input
                        className={styles.inputField}
                        onChange={onChange}
                    ></input>
                )}
            </label>
        </div>
    );
};
