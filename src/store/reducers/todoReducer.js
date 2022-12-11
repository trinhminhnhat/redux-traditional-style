const initialState = {
    todos: [
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
    ],
};

const todoReducer = (state = initialState, action) => {
    return state;
};

export default todoReducer;
