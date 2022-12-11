import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    deleteTodo,
    getTodos,
    markComplete
} from '../store/actions/todoActions';
import TodoForm from './TodoForm';

const Todos = ({ todos, getTodos, markComplete, deleteTodo }) => {
    useEffect(() => {
        getTodos();
    }, [])

    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox" name="" id="" onChange={markComplete.bind(this, todo.id)} />
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Todos.protoTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    todos: state.myTodo.todos,
});

export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo })(Todos);
