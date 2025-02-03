import { useDispatch } from "react-redux";
import s from "./ListItem.module.css";
import {
  deleteItemExtraThunk,
  editItemExtraThunk,
  toggleCompleteExtraThunk,
} from "../../redux/todoListExtraOps";

export default function ListItem({ id, listItem, completed }) {
  const dispatch = useDispatch();

  const handleChangeCompleted = () => {
    dispatch(toggleCompleteExtraThunk({ id, completed: !completed }));
  };

  const handleEdit = () => {
    const newTitle = prompt("Please edit your wish", listItem);
    if (newTitle !== null) {
      dispatch(editItemExtraThunk({ id, tittle: newTitle }));
    }
  };

  return (
    <li className={s.container}>
      <div className={s.divItem}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={completed}
          onChange={handleChangeCompleted}
          id={`checkbox-${id}`}
        />
        <label htmlFor={`checkbox-${id}`}></label>

        <div className={s.tittle}>{listItem}</div>
      </div>
      <div className={s.divBtn}>
        <button className={s.btnEdit} onClick={handleEdit}>
          Edit
        </button>
        <button
          className={s.btn}
          onClick={() => dispatch(deleteItemExtraThunk(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
