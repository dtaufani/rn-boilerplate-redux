import constants from "../constants/todo";

export default function(
    state = {
        loading: false,
        todos: []
    },
    action = {}
) {
    switch (action.type) {
        case constants.set:
            return Object.assign({}, state, {
                todos: action.todos
            });

        case constants.add:
            return Object.assign({}, state, {
                todos: [
                    {
                        id:
                            state.todos.reduce(
                                (maxId, todo) => Math.max(todo.id, maxId),
                                -1
                            ) + 1,
                        completed: false,
                        text: action.text
                    },
                    ...state.todos
                ]
            });

        case constants.delete:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            });

        case constants.complete:
            return Object.assign({}, state, {
                todos: state.todos.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            });

        case constants.loading:
            return Object.assign({}, state, {
                loading: !state.loading
            });

        default:
            return state;
    }
}
