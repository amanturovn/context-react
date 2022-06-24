import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/todoConrext";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div>
      {todos.map(item => (
        <div key={item.id}>
          {item.todo}
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default List;
