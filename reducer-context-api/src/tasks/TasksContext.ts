import { createContext } from "react";
import { Task } from "./Task";
import { TaskAction } from "./TaskAction";
import { tasksReducer } from "./TasksReducer";

export const initialTasks: Task[] = [
    { id: 0, text: "Elaborar Aulas", done: true },
    { id: 1, text: "Estudar Flutter - Estados", done: false },
    { id: 2, text: "Correr avenida Raul Lopres", done: false },
  ];

export const TasksContext = createContext(initialTasks);
export const TasksDispatchContext = createContext<any>(null);
