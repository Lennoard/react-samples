import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TasksDispatchContext } from "../tasks/TasksContext";
import { TaskType } from "../tasks/TaskType";

export function AddTask() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  const handlerDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTaskText("");
    dispatch({
      type: TaskType.Added,
      id: nextId++,
      text: taskText,
    });
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={handlerDescriptionChange}
          placeholder="Descrição"
        />
        <input type="submit" value="Adicionar Tarefa" />
      </form>
    </>
  );
}

let nextId = 3;
