import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Task } from "../tasks/Task";
import { TasksDispatchContext } from "../tasks/TasksContext";
import { TaskType } from "../tasks/TaskType";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: TaskType.Changed,
      task: {
        ...task,
        text: event.target.value,
      },
    });
  };

  const handleEditSaveClick = () => {
    setIsEditing(!isEditing);
  };

  // useMemo --> Faz Memória valores entre renderizações/sincronizações
  const buttonLabel = useMemo(
    () => (isEditing ? "Salvar" : "Editar"),
    [isEditing]
  );

  // useHef --> Similar a useState, porém não muda. (atributo current)
  /* Usado geralmente para ficar conectado a algum HTMLElement
      e assim ler ou alterar algum atributo/estado  */
  const inputTaskTextRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isEditing && inputTaskTextRef.current!.focus();
  }, [isEditing]);

  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: TaskType.Changed,
            task: {
              ...task,
              done: e.target.checked,
            },
          })
        }
      />

      {isEditing ? (
        <input
          ref={inputTaskTextRef}
          value={task.text}
          onChange={handleTextChange}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <button onClick={handleEditSaveClick}>{buttonLabel}</button>
      <button
        onClick={() => {
          dispatch({
            type: TaskType.Deleted,
            id: task.id,
          });
        }}
      >
        Apagar
      </button>
    </li>
  );
}
