import { PostsActionTypes, PostAction } from './../../types/posts';
import axios from 'axios'
import { Dispatch } from 'redux';
import { API_URL } from "../../config.js";

let postsURL = `${API_URL}api/posts`

const postsPromise = axios.get(postsURL);

export const getPosts = () => (dispatch: Dispatch<PostAction>) => {
    try {
        postsPromise.then((values) => {
            dispatch(setPosts(values.data))
        });
    } catch (e) {
        console.log(e);
    }
}

export const setPosts = (posts: []) => ({ type: PostsActionTypes.FETCH_POSTS, payload: posts })