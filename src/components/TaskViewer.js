import React from 'react'
import styles from '../stylings/TaskViewer.module.css'
import Card from './Card'
import ModalComponent from './Modal'
const TaskViewer = ({ data }) => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>Task manager</div>
      <ModalComponent />
      <div className={styles.content}>
        {data.map((item, index) => {
          return <Card key={index} item={item} />
        })}
      </div>
    </div>
  )
}

export default TaskViewer
