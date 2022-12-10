import { useState } from 'react';
import TodoForm from './TodoForm';

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'Work 1',
            isCompleted: true,
        },
        {
            id: 2,
            name: 'Work 2',
            isCompleted: false,
        },
        {
            id: 3,
            name: 'Work 3',
            isCompleted: true,
        },
    ]);

    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.name}
                        <button>Delete</button>
                        <input type="checkbox" name="" id="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
