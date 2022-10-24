import { Task } from "./Task";
import { TaskAction } from "./TaskAction";
import { TaskType } from "./TaskType";

export const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case TaskType.Added: {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case TaskType.Changed: {
      return tasks.map((t) => {
        if (t.id === action?.task?.id) {
          return action.task;
        }
        return t;
      });
    }
    case TaskType.Deleted: {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
