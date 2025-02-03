import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/todoSlice";
import s from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter) ?? "";

  return (
    <div className={s.div}>
      <input
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={s.input}
        id="id-form"
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  );
}
