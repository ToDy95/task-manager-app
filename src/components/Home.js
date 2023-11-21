import React, { useState, useEffect } from "react";
import TaskViewer from "./TaskViewer";
import Search from "./Search";
function Home() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const getData = async () => {
    const response = await fetch('./dataFull.json');
    const result = await response.json();
    return result
  }

  useEffect(() => {
    getData().then(res => setData(res)).catch(console.error)

  }, [setData])
  const searchData = (params) => {

    setFilterData(params)
  }
  return (
    <div className="App">
      <Search data={data} searchData={searchData} />
      <TaskViewer data={filterData.length > 0 ? filterData : data} setData={setData} />{" "}
      {/* trimitem din TaskViewer */}
    </div>
  );
}

export default Home;
