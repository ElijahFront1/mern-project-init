import { PostsActionTypes, PostState, PostAction } from "../../types/posts";

const defaultState: PostState = {
    posts: []
}

export default function postsReducer(state = defaultState, action: PostAction): PostState {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS: return { ...state, posts: action.payload }
        default:
            return state
    }
}
