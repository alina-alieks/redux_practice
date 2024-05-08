import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasks/actions";

export const Task = ({ task }) => {
  const dispach = useDispatch();

  const handleOnClick = () => dispach(deleteTask(task.id));

  const handleOnChange = () => dispach(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        onChange={handleOnChange}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleOnClick}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
