import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Task = () => {

  const { id } = useParams();
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      const response = await fetch(`${__dirname}dataFull.json`);
      const result = await response.json();

      if (response.ok)
        return result
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData().then(res => setData(res.filter(item => item.id === id))).catch(console.error)

  }, [])

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item?.title}</h1>
            <section>
              <article>
                <p>{item?.details}</p>
              </article>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Task
