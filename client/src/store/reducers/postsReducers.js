const SET_POSTS = "SET_POSTS"

const defaultState = {
    posts: [{ _id: "608028fa782ad929f06f932c", author: "test", title: "testTitle", content: "testContent", __v: 0 }]
}

export default function postsReducer(state = defaultState, action) {
    console.log(action.payload);
    switch (action.type) {
        case SET_POSTS: return { ...state, postsData: [...action.payload] }
        default:
            return state
    }
}

export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts })