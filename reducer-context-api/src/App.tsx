import { useReducer } from "react";
import "./App.css";
import { AddTask } from "./components/add_task";
import { TaskList } from "./components/list_task";
import { initialTasks, TasksContext, TasksDispatchContext } from "./tasks/TasksContext";
import { tasksReducer } from "./tasks/TasksReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
