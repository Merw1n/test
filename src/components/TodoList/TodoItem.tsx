import { useState } from "react";
import { Todo, editTodo } from "../../store/slices/todoSlice";
import "../../styles/TodoItem.scss"
import { useDispatch } from "react-redux";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (todoId: number) => void;
  onDeleteTodo: (todoId: number) => void
}

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();
  const handleEditTodo = () => {
    dispatch(editTodo({ id: todo.id, newText: editedText }));
    setIsEditing(false);
  };
  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <li
          onClick={() => onToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      )}
      {isEditing ? (
        <button onClick={handleEditTodo}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
