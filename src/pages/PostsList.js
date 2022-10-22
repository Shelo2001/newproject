import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { getAllPosts, getAllUsers } from '../features/postsSlice'

const PostsList = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)

  const posts = useSelector((state) => state.posts)
  const { allPosts, allUsers } = posts

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  }, [dispatch])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = allPosts?.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <div className='postsContainer'>
        {currentPosts?.map((post, index) => (
          <div key={index} title='Post Details'>
            <div className='post'>
              <div className='postDetails'>
                <div>
                  {allUsers?.map((user) => {
                    if (user?.id === post?.userId) {
                      return (
                        <Link
                          title='User Details'
                          to={`/user/${user.id}`}
                          className='author'
                        >
                          Author: {user?.name}
                        </Link>
                      )
                    }
                  })}
                </div>
                <div>
                  <p className='title'>{post.title}</p>
                  <p>{post.body.substring(0, 70)}...</p>
                  <Link className='postLink' to={`/post/${post.id}`}>
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        className='pagination'
        totalPosts={allPosts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default PostsList
