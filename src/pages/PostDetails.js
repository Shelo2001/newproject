import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {
  getAllComments,
  getAllPosts,
  getAllUsers,
  getPostById,
} from '../features/postsSlice'
import InfiniteScroll from 'react-infinite-scroll-component'

const PostDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [loadAllComments, setLoadAllComments] = useState(false)

  const posts = useSelector((state) => state.posts)
  const { post, allUsers, allPosts, loading, allComments } = posts

  useEffect(() => {
    dispatch(getPostById(id))
    dispatch(getAllUsers())
    dispatch(getAllPosts())
    dispatch(getAllComments(id))
  }, [])

  const fetchData = () => {
    let postId = id
    let getPostWithId = Number(postId) + 1
    dispatch(getPostById(getPostWithId))
    dispatch(getAllComments(getPostWithId))
  }

  const loadMoreHandler = () => {
    setLoadAllComments(true)
  }

  return (
    <div>
      {/* <InfiniteScroll
        dataLength={allPosts.length}
        next={fetchData}
        hasMore={post?.id === 100 ? false : true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Last Post!</b>
          </p>
        }
      > */}
      <div className='postContainer'>
        <div className='postDetailsContent'>
          <div className='postDetailsdivs'>
            <p style={{ marginLeft: '30px' }} className='title'>
              User Details
            </p>
            {allUsers
              .filter((user) => user.id === post?.userId)
              .map((u) => (
                <div>
                  <p className='userDetailsParagraph'>Name: {u.name}</p>
                  <p className='userDetailsParagraph'>Username: {u.username}</p>
                  <a
                    className='userDetailsParagraph'
                    href={`mailto:${u.email}`}
                  >
                    Email: {u.email}
                  </a>
                </div>
              ))}
          </div>
          <div className='postDetailsdivs'>
            <p className='title'>{post?.title}</p>
            <p className='postBody'>{post?.body}</p>
          </div>
        </div>
        <hr />
        <div>
          <p style={{ marginLeft: '40px' }} className='title'>
            Comments:
          </p>
          {loadAllComments
            ? allComments.map((comment) => (
                <div className='comment'>
                  <p style={{ marginLeft: '40px' }} className='title'>
                    {comment?.name}
                  </p>
                  <p style={{ marginLeft: '70px' }} className='postBody'>
                    {comment?.body}
                  </p>
                  <a
                    style={{ marginLeft: '40px' }}
                    href={`mailto:${comment.email}`}
                  >
                    <i class='fa-solid fa-user'></i> {comment.email}
                  </a>
                </div>
              ))
            : allComments.slice(0, 3).map((comment) => (
                <div className='comment'>
                  <p style={{ marginLeft: '40px' }} className='title'>
                    {comment.name}
                  </p>
                  <p style={{ marginLeft: '70px' }} className='postBody'>
                    {comment.body}
                  </p>
                  <a
                    style={{ marginLeft: '40px' }}
                    href={`mailto:${comment.email}`}
                  >
                    <i class='fa-solid fa-user'></i> {comment.email}
                  </a>
                </div>
              ))}
          {!loadAllComments && (
            <button onClick={loadMoreHandler} className='loadAllButton'>
              Load All Comments...
            </button>
          )}
        </div>
      </div>
      {/* </InfiniteScroll> */}
    </div>
  )
}

export default PostDetails
