import axios from 'axios'
import { FETCH_USER,SAVE_USER,FETCH_USER_PROFILE } from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}
export const saveUser = (id,values) => async (dispatch) => {
  const res = await axios.post('/api/profile/'+id,values)
  dispatch({ type: SAVE_USER, payload: res.data })
}
export const fetchUserProfile = (id) => async (dispatch) => {
  const res = await axios.get('/api/profile/'+id)
  dispatch({ type: FETCH_USER_PROFILE, payload: res.data })
}