export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
}

export interface PostState {
    posts: any[];
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
    payload: any[];
}

export type PostAction = FetchPostsAction