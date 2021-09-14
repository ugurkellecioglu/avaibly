import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../constants/axios'
import produce from "immer"

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }, thunkAPI) => {
  return await axios.post('/login', {
    email,
    password
  }).then(response => {
    return thunkAPI.fulfillWithValue(response.data)
  }).catch(e => {
    return thunkAPI.rejectWithValue(e)
  })
})

export const signUp = createAsyncThunk('user/signup', async ({ username, password }, thunkAPI) => {
  try {
    const response = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const result = await response.json()
    if (response.status === 200) {
      return result.data
    } else {
      return thunkAPI.rejectWithValue(result)
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState:
  {
    email: '',
    token: '',
    isFetching: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    selectedTag: ''
  },
  reducers: {
    clearState(state, action) {
      state = {
        email: '',
        token: '',
        isFetching: false,
        isError: false,
        isSuccess: false,
        errorMessage: '',
        selectedTag: ''
      }
      return state
    },
    selectTag(state, action) {
      state = { ...state, selectedTag: action.payload }
      return state
    }
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.isFetching = false
      state.isSuccess = true
      state.isError = false
      state.token = action.payload.token
      state.email = action.payload.email
      state.expires_in = action.payload.expires_in
    },
    [signIn.pending]: (state) => {
      state.isFetching = true
      state.isSuccess = false

    },
    [signIn.rejected]: (state, action) => {
      state.isError = true
      state.isFetching = false
      state.isSuccess = false
      state.errorMessage = action.error
    },
    [signUp.pending]: (state) => {
      return state = {
        ...state,
        isFetching: true
      }
    },
    [signUp.fulfilled]: (state, action) => {
      return state = {
        ...state,
        isSuccess: true,
        isFetching: false
      }
    },
    [signUp.rejected]: (state, action) => {
      return state = {
        ...state,
        isError: true
      }
    }
  }
})

export const { clearState } = userSlice.actions

export const userSelector = (state) => state.user
