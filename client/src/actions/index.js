import axios from 'axios'
import { FETCH_USER,SAVE_USER,ADD_BOOK,FETCH_BOOKS, FETCH_MY_BOOKS } from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}
export const saveUser = (id,values) => async (dispatch) => {
  const res = await axios.post('/api/profile/'+id,values)
  dispatch({ type: SAVE_USER, payload: res.data })
}
export const addBook = (id,values) => async (dispatch) => {

  const res = await axios.post('/api/books/add/'+id,values)
  dispatch({ type: ADD_BOOK, payload: res.data })
}
export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get('/api/books/')
  dispatch({ type: FETCH_BOOKS, payload: res.data })
}
export const fetchMyBooks = (id) => async (dispatch) => {
  const res = await axios.get('/api/books/'+id)
  dispatch({ type: FETCH_MY_BOOKS, payload: res.data })
}