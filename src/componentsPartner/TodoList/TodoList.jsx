import { useDispatch, useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";
import { useEffect } from "react";
import { fetchItemExtraThunk } from "../../redux/todoListExtraOps";
import {
  selectFilterListsExtra,
  selectIsErrorExtra,
  selectIsLoadingExtra,
} from "../../redux/todoSliceExtra";

export default function TodoList() {
  const dispatch = useDispatch();
  const filterList = useSelector(selectFilterListsExtra) ?? [];

  const isLoading = useSelector(selectIsLoadingExtra);
  const isError = useSelector(selectIsErrorExtra);

  useEffect(() => {
    if (filterList.length === 0 && !isLoading) {
      dispatch(fetchItemExtraThunk());
    }
  }, [dispatch, filterList.length, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong..</div>;
  }

  if (filterList.length === 0) {
    return <p>List is empty</p>;
  }

  return (
    <ul>
      {filterList.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          listItem={item.tittle}
          completed={item.completed}
        />
      ))}
    </ul>
  );
}
