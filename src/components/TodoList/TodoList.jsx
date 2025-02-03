import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterLists,
  selectIsError,
  selectIsLoading,
} from "../../redux/todoSlice";
import ListItem from "../ListItem/ListItem";
import { useEffect } from "react";
import { fetchItemThunk } from "../../redux/contactsOps";

export default function TodoList() {
  const dispatch = useDispatch();
  const filterList = useSelector(selectFilterLists);
  const isLoading = useSelector(selectIsLoading); // Статус завантаження
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchItemThunk());
  }, [dispatch]);

  if (isLoading) {
    console.log("filterList:", filterList);
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Somthing go wrong..</div>;
  }

  return (
    <ul>
      {filterList.length === 0 ? (
        <li>List empty</li>
      ) : (
        filterList.map((item) => {
          console.log(item);
          return (
            <ListItem
              key={item.id}
              id={item.id}
              listItem={item.tittle}
              completed={item.completed}
            />
          );
        })
      )}
    </ul>
  );
}
