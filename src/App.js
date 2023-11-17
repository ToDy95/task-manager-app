import React, { useState } from "react";
import TaskViewer from "./components/TaskViewer";
function App() {
  const [data, setData] = useState([
    {
      id: "T-1",
      status: "Progress",
      message: "dsaaasadsadasCreate a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-2",
      status: "Done",
      message: "bvbcvCreate a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-3",
      status: "Waiting",
      message: "abcCreate a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-4",
      status: "Canceled",
      message: "4Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-5",
      status: "Abandoned",
      message: "1Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-6",
      status: "Abandoned",
      message: "5Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-7",
      status: "Abandoned",
      message: "3Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-8",
      status: "Abandoned",
      message: "2Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
  ]);
  return (
    <div className="App">
      <TaskViewer data={data} setData={setData} />{" "}
      {/* trimitem din TaskViewer */}
    </div>
  );
}

export default App;
