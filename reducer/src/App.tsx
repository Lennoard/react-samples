import { useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      
    </div>
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];
