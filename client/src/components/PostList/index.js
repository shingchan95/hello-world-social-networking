import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const PostList = ({
  posts,
  username,
}) => {

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }


  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3 pl-2">
            <h4 className="p-2 m-0">
                <>
                  <p style={{ fontSize: '1.5rem' }}>
                    {username} 
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>{post.createdAt}</p>
                </>           
            </h4>
            <div className="p-2">
              <p style={{ fontSize: '1.8rem' }}>{post.postText}</p>
            </div>
            <CommentList comments={post.comments} />
            <CommentForm
              className="btn btn-primary btn-block btn-squared"
              postId={post._id}
              />
          
          </div>
        ))}
    </div>
  );
};

export default PostList;
