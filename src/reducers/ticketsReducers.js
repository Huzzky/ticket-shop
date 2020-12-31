import { REQUEST_DATA_TICKETS, SUCCESS_DATA_TICKETS } from '../const/const'

const initialState = {
  data: [],
  isFetchDataTickets: false,
}

export default function ticketsReducer(state = initialState, { type, data }) {
  switch (type) {
    case REQUEST_DATA_TICKETS:
      return { ...state, isFetchDataTickets: true }
    case SUCCESS_DATA_TICKETS:
      return { ...state, isFetchDataTickets: false, data: data }
    default:
      return state
  }
}
