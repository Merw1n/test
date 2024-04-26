import { Todo } from "../../store/slices/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const DeletedTodoItem = ({ todo }: TodoItemProps) => {

  return (
    <li>
      <span>{todo.text}</span>
    </li>
  );
};

export default DeletedTodoItem;
