import { FETCH_RECEIVED_TRADE,FETCH_SENT_TRADE } from '../actions/types'
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_RECEIVED_TRADE:
      return action.payload || false 
      case FETCH_SENT_TRADE:
      return action.payload || false 
    default:
      return state
  }
}