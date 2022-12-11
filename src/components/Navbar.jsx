import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({ todos }) => {
    return (
        <div className="navbar">
            <h1>Redux tradition style App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todo: {todos.length}</li>
            </ul>
        </div>
    );
};

Navbar.protoTypes = {
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    todos: state.myTodo.todos,
});

export default connect(mapStateToProps, {})(Navbar);
