import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

const Todos = ({ todos }) => {
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

Todos.protoTypes = {
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    todos: state.myTodo.todos,
});

export default connect(mapStateToProps, {})(Todos);
