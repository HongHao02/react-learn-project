import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants"

const initialState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            let newState= {
                ...state,
            }
            newState.todos.splice(action.payload,1)
            return newState
        default:
            throw new Error('Invalid action type!')
    }
}

export { initialState }
export default reducer