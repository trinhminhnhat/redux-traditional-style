import { combineReducers } from 'redux';

import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    myTodo: todoReducer,
});

export default rootReducer;
