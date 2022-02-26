import React from "react";
import styles from "./Task.module.css";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Task = ({ name, description, onDelete }) => {
    return (
        <div className={styles.taskWrapper}>
            <FontAwesomeIcon
                icon={faXmarkCircle}
                className={styles.icon}
                onClick={onDelete}
            />
            <div className={styles.taskHeader}>{name}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
