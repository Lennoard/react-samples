import { Task } from "./Task";
import { TaskType } from "./TaskType";

export interface TaskAction {
  id: number;
  text: string;
  type: TaskType;
  task?: Task;
}
