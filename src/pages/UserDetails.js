import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getAllPosts, getUserById } from '../features/postsSlice'

const UserDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const users = useSelector((state) => state.posts)
  const { user, allPosts, loading } = users

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getUserById(id))
  }, [dispatch, id])

  return (
    <div>
      <div>
        <p style={{ marginLeft: '50px' }} className='title'>
          User Details
        </p>
        <div>
          <p className='userDetailsParagraph'>Name: {user.name}</p>
          <p className='userDetailsParagraph'>Username: {user.username}</p>
          <a className='userDetailsParagraph' href={`mailto:${user.email}`}>
            Email: {user.email}
          </a>
          <p className='userDetailsParagraph'>Phone Number: {user.phone}</p>
          <a
            className='userDetailsParagraph author'
            href={`http://${user.website}`}
          >
            Website: {user.website}
          </a>
          <p className='userDetailsParagraph'>
            Address: {user?.address?.city}, {user?.address?.street},{' '}
            {user?.address?.suite} (Zip-Code:{user?.address?.zipcode})
          </p>
          <p className='userDetailsParagraph'>
            Work Place: {user?.company?.name}
          </p>

          <iframe
            src={`https://maps.google.com/maps?q=${user?.address?.geo?.lat},${user?.address?.geo?.lng}&hl=es;&output=embed`}
            height='500px'
            width='100%'
          ></iframe>
        </div>
      </div>
      <hr />
      <div>
        <p style={{ marginLeft: '50px' }} className='title'>
          User's Posts
        </p>
        <div>
          {allPosts
            .filter((post) => post.userId == user.id)
            .map((p, i) => (
              <p>
                <Link
                  className='userDetailsParagraph author'
                  to={`/post/${p.id}`}
                >
                  {(i = i + 1)}. {p.title}{' '}
                  <i class='fa-solid fa-sm fa-right-from-bracket'></i>
                </Link>
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
