import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../store/actions/todoActions.js';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (title !== '') {
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
            };
            addTodo(newTodo);
            setTitle('');
        }
    };

    return (
        <div>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
