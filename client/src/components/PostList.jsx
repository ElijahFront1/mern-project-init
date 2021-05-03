import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Post from '../Post';
import { getPosts } from "../store/actions/postsActions.js";


function PostList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    let posts = useSelector((reducers) => reducers.posts.posts)
    console.log(posts);
    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <Post post={post} />
                </div>
            )}
        </div>
    )
}

export default PostList
