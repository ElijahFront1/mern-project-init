import axios from 'axios'
import { setPosts } from "../reducers/postsReducers.js";
import { API_URL } from "../../config.js";


export function getPosts() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/posts`
            // const response = await axios.get(url);
            // console.log(response.data);
            // dispatch(setPosts(response.data))
            const response = await axios.get(url);
            dispatch(setPosts(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}