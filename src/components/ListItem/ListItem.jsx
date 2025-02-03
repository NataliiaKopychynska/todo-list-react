import { useDispatch } from "react-redux";
import { selectFilterLists } from "../../redux/todoSlice";
import s from "./ListItem.module.css";
import {
  deleteItemThunk,
  editItemThunk,
  toggleCompleteThunk,
} from "../../redux/contactsOps";

export default function ListItem({ id, listItem, completed }) {
  const dispatch = useDispatch();

  const handleChangeCompleted = () => {
    dispatch(toggleCompleteThunk({ id, completed: !completed }));
  };

  return (
    <li className={s.container}>
      <div className={s.divItem}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={completed}
          onChange={handleChangeCompleted}
          id="myCheckbox"
        />
        <label htmlFor="myCheckbox"></label>

        <div className={s.tittle}>{listItem}</div>
      </div>
      <div className={s.divBtn}>
        <button
          className={s.btnEdit}
          onClick={() =>
            dispatch(
              editItemThunk({
                id,
                tittle:
                  prompt("Please edit your wish", listItem) ??
                  selectFilterLists,
              })
            )
          }
        >
          Edit
        </button>
        <button className={s.btn} onClick={() => dispatch(deleteItemThunk(id))}>
          Delete
        </button>
      </div>
    </li>
  );
}
