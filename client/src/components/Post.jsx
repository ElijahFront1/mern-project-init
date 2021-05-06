import React from 'react'

function Post({ post }) {
    return (
        <div>
            {post._id}
            {post.author}
        </div>
    )
}

export default Post
