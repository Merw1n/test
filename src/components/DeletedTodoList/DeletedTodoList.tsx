import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DeletedTodoItem from './DeletedTodoItem';
import "../../styles/DeletedTodoItem.scss"

const DeletedTodoList = () => {
  const deletedTodos = useSelector((state: RootState) => state.todos.todos.filter(todo => todo.deleted));

  return (
    <div>
      <h2>Deleted Todos</h2>
      <ul>
        {deletedTodos.map(todo => (
          <DeletedTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default DeletedTodoList;
