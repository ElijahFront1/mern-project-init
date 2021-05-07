const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function postsReducer(state = defaultState, action) {
    // console.log(action);
    switch (action.type) {
        case SET_USER: return {
            ...state,
            currentUser: action.payload,
            isAuth: true,
        }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                currentUser: {},
                isAuth: false,
            }
        default:
            return state
    }
}
