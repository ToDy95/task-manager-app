import React from "react";
import styles from "../stylings/TaskViewer.module.css";
import Card from "./Card";
import ModalComponent from "./Modal";
const TaskViewer = ({ data, setData }) => {
  function addNewTask(newData) {
    // aducem datele din Modal in TaskViewer
    setData((prev) => [newData, ...prev]); //trimitem datele din TaskViewer in App sub forma de array--- prevenim suprascrierea datelor existente
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Task manager</div>
      <ModalComponent addNewTask={addNewTask} /> {/* trimitem din Modal */}
      <div className={styles.content}>
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TaskViewer;
