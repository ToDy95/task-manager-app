import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../stylings/Modal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

function ModalComponent({ addNewTask }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // Am creat un state pentru fiecare input
  const [taskId, setTaskId] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState("");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handlerSubmit(event) {
    event.preventDefault(); // previne refreshul paginii
    const newTaskData = {
      // transpunem datele din input intr-un obiect
      id: taskId,
      status: taskStatus,
      message: taskMessage,
      dueDate: new Date(taskDate),
    };
    addNewTask(newTaskData); // trimite datele din Modal in TaskViewer
    closeModal(); // inchide fereastra de modal dupa adaugarea task-ului
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* Am creat 4 inputuri de date */}
        <label htmlFor="taskID">ID</label>
        <input
          type="text"
          name="taskId"
          value={taskId}
          onChange={(event) => setTaskId(event.target.value)} // eveniment la modficarea continutului
        />
        <label htmlFor="taskStatus">Status</label>

        <input
          type="text"
          name="taskStatus"
          value={taskStatus}
          onChange={(event) => setTaskStatus(event.target.value)} // eveniment la modficarea continutului
        />
        <label htmlFor="taskMessage">Message</label>

        <input
          type="text"
          name="taskMessage"
          value={taskMessage}
          onChange={(event) => setTaskMessage(event.target.value)} // eveniment la modficarea continutului
        />
        <label htmlFor="taskDate">Date</label>

        <input
          type="date"
          name="taskDate"
          value={taskDate}
          onChange={(event) => setTaskDate(event.target.value)} // eveniment la modficarea continutului
        />
        {/* eveniment la apasarea butonului */}
        <button onClick={handlerSubmit}>Add</button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
