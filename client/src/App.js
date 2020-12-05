import React from 'react';

import PostCreate from './PostCreate';
import PostList from './PostList';
import CommentCreate from './CommentCreate';

export default () => {
    return (
        <div>
            <h1>Create Post</h1>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
        </div>
    )
}