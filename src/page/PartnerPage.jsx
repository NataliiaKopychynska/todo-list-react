import { useEffect } from "react";
import AddForm from "../componentsPartner/AddForm/AddForm";
import SearchBar from "../componentsPartner/SearchBar/SearchBar";
import TodoList from "../componentsPartner/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";

import { selectListExtra } from "../redux/todoSliceExtra";
import { fetchItemExtraThunk } from "../redux/todoListExtraOps";

export default function PartnerPage() {
  const dispatch = useDispatch();
  const partnerList = useSelector(selectListExtra); // Отримання даних

  useEffect(() => {
    dispatch(fetchItemExtraThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Partner Wish List</h1>
      <div className="searchBox">
        <AddForm />
        <SearchBar />
      </div>
      {partnerList.length === 0 ? (
        <p>Your list is empty</p>
      ) : (
        <TodoList items={partnerList} />
      )}
    </div>
  );
}
