import { useContext } from "react";
import { TasksContext } from "../tasks/TasksContext";
import { TaskItem } from "./item_task";

export function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
