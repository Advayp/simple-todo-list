import React from "react";
import styles from "./InputField.module.css";

export const InputField = ({ label, onChange }) => {
    return (
        <div className={styles.fieldWrapper}>
            <label>
                <span className={styles.fieldLabel}>{label}</span>
                <input
                    className={styles.inputField}
                    onChange={onChange}
                ></input>
            </label>
        </div>
    );
};
