import { useEffect } from "react";
import AddForm from "../components/AddForm/AddForm";
import SearchBar from "../components/SearchBar/SearchBar";
import TodoList from "../components/TodoList/TodoList";
import { fetchItemThunk } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectList } from "../redux/todoSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const list = useSelector(selectList); // Перевірка чи приходять дані

  useEffect(() => {
    dispatch(fetchItemThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Wish list</h1>
      <div className="searchBox">
        <AddForm />
        <SearchBar />
      </div>
      <TodoList items={list} />
    </div>
  );
}
