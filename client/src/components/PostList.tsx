import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Post from './Post';
import { getPosts } from "../store/actions/postsActions";
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';


const PostList: React.FC = () => {
    const dispatch = useDispatch()
    const { getPosts } = useActions()
    let posts = useTypeSelector((reducers) => reducers.posts.posts)

    useEffect(() => {
        getPosts()
    }, [])

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
