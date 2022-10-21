import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  allPosts: [],
  allUsers: [],
  user: [],
  post: [],
  allComments: [],
}

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    const { data } = await axios.get(
      'https:/jsonplaceholder.typicode.com/posts'
    )
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getAllUsers = createAsyncThunk('posts/getAllUsers', async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getUserById = createAsyncThunk('posts/getUserById', async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getPostById = createAsyncThunk('posts/getPostById', async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getAllComments = createAsyncThunk(
  'posts/getAllComments',
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false
      state.allPosts = action.payload
    },
    [getAllPosts.rejected]: (state) => {
      state.loading = false
    },

    [getAllUsers.pending]: (state) => {
      state.loading = true
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false
      state.allUsers = action.payload
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false
    },

    [getUserById.pending]: (state) => {
      state.loading = true
    },
    [getUserById.fulfilled]: (state, action) => {
      state.user = action.payload
    },
    [getUserById.rejected]: (state) => {
      state.loading = false
    },

    [getPostById.pending]: (state) => {
      state.loading = true
    },
    [getPostById.fulfilled]: (state, action) => {
      state.post = action.payload
    },
    [getPostById.rejected]: (state) => {
      state.loading = false
    },

    [getAllComments.pending]: (state) => {
      state.loading = true
    },
    [getAllComments.fulfilled]: (state, action) => {
      state.loading = false
      state.allComments = action.payload
    },
    [getAllComments.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default postsSlice.reducer
