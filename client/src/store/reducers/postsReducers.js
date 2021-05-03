const SET_POSTS = "SET_POSTS"

const defaultState = {
    posts: []
}

export default function postsReducer(state = defaultState, action) {
    console.log(action.payload);
    switch (action.type) {
        case SET_POSTS: return { ...state, posts: action.payload } 
        default:
            return state
    }
}
