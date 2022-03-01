import { Button } from "../components/Button";
import { InputField } from "../components/InputField";
import React, { useState } from "react";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className={styles.signUpBox}>
            <h1>Add Task</h1>
            <div className={styles.signUpWrapper}>
                <InputField
                    label="Name"
                    type=""
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <InputField
                    label="Desc."
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    large
                />
                <br />
            </div>
            <NextLink href={"/view"}>
                <Button
                    text="Submit"
                    onClick={() => {
                        const task = { name, description };
                        const existingTasks = JSON.parse(
                            localStorage.getItem("tasks")
                        );
                        if (existingTasks === null) {
                            localStorage.setItem(
                                "tasks",
                                JSON.stringify([task])
                            );
                            return;
                        }
                        localStorage.setItem(
                            "tasks",
                            JSON.stringify([...existingTasks, task])
                        );
                    }}
                />
            </NextLink>
        </div>
    );
}
