import axios from 'axios'
import { API_URL } from "../../config.js";

let postsURL = `${API_URL}api/posts`

const postsPromise = axios.get(postsURL);

export const getPosts = () => (dispatch) => {
    postsPromise.then((values) => {
        dispatch(setPosts(values.data))
    });
}

export const setPosts = (posts) => ({ type: 'SET_POSTS', payload: posts })