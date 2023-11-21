import React, { useState, useEffect } from 'react';
import styles from '../stylings/Card.module.css';
import { Link, useNavigate } from 'react-router-dom';
const Card = ({ item, data, setData }) => {
  const nagivate = useNavigate();
  const [checkedList, setCheckedList] = useState([])
  const [check, setCheck] = useState(false)
  const removeCompletedTasks = (itemId) => {
    setCheck(true)
    setCheckedList((prev) => [itemId, ...prev]);
    setCheck(false)
  };

  useEffect(() => {
    console.log("render2")
    setData(data.filter((item) => !checkedList.includes(item.id)));
  }, [checkedList, setData]);

  return (
    // <Link to={`/task/${item.id}`}>
    <div className={styles.card}>
      <div className={styles.firstLine}>
        <div className={styles.id}>T - {item.id}</div>
        <div className={styles.status}>
          {item.status}
          {item.status === 'Completed' ?
            <input type="checkbox"
              checked={check} //checkedList.includes(item.id)
              onChange={() => removeCompletedTasks(item.id)} />
            : <></>}
        </div>
      </div>
      <div className={styles.secondLine}>{item.message}</div>
      <div className={styles.thirdLine}>
        <div className={styles.dueDate}>Due date</div>
        <div className={styles.date}>
          {new Date(item.dueDate).toLocaleDateString('ro-RO')}
        </div>
      </div>
      <div className={styles.fourLine}>
        <button onClick={() => nagivate(`/task/${item.id}`)}>
          See card detail
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
