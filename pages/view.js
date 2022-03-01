import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Task } from "../components/Task";
import NextLink from "next/link";
import styles from "../styles/View.module.css";

const View = () => {
    const [tasks, setTasks] = useState([]);

    const UpdateTasks = () => {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
    };

    useEffect(() => {
        UpdateTasks();
    }, []);

    return (
        <>
            <div className={styles.taskContainer}>
                {tasks?.map((val, idx) => {
                    return (
                        <Task
                            name={val.name}
                            description={val.description}
                            key={idx}
                            onDelete={() => {
                                const modifiedTasks = JSON.parse(
                                    localStorage.getItem("tasks")
                                );

                                console.log("Removing", modifiedTasks[idx]);

                                modifiedTasks.splice(idx, 1);

                                localStorage.setItem(
                                    "tasks",
                                    JSON.stringify(modifiedTasks)
                                );
                                UpdateTasks();
                            }}
                        />
                    );
                })}
            </div>
            <div className={styles.addTaskButtonWrapper}>
                <NextLink href={"/"}>
                    <Button
                        text={"Add Task"}
                        className={styles.addTaskButton}
                    />
                </NextLink>
            </div>
        </>
    );
};

export default View;
