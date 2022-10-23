import { Task } from "../App";
import { TaskActionKind } from "./TaskActionKind";

interface TaskAction {
  type: TaskActionKind;
  id: number;
  text: string;
  task: Task;
}

interface TasksState {
  tasks: Task[];
}

export default function taskReducer(
  state: TasksState,
  action: TaskAction
): TasksState {
  const { type, id, text, task } = action;
  const { tasks } = state;

  switch (type) {
    case TaskActionKind.Added:
      return {
        ...state,
        tasks: [
          ...tasks,
          {
            id: id,
            text: text,
            done: false,
          },
        ],
      };
    case TaskActionKind.Changed:
      return {
        ...state,
        tasks: tasks.map((t) => {
          if (t.id === id) return task;
          return t;
        }),
      };
    case TaskActionKind.Deleted:
      return {
        ...state,
        tasks: tasks.filter((t) => t.id !== action.id),
      };
    default:
      return state;
  }
};
