import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, onClick }) => {
    return (
        <>
            <a className={styles.button} onClick={onClick}>
                {text}
            </a>
        </>
    );
};
