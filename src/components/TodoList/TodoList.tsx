import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addTodo, deleteTodo, toggleTodo } from "../../store/slices/todoSlice";
import TodoItem from "./TodoItem";
import "../../styles/TodoItem.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => !todo.deleted)
  );

  const handleToggleTodo = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const navigateToDeleted = () => {
    navigate("/deleted");
  };

  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <div className="action-btns">
        <div>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <button onClick={navigateToDeleted}>Go to deleted items</button>
      </div>
    </div>
  );
};

export default TodoList;
