import { fetchData } from '../api/apiRequest'
import {
  ERROR_REQUEST,
  REQUEST_DATA_TICKETS,
  SUCCESS_DATA_TICKETS,
} from '../const/const'

const getDataFromApi = (rows) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_DATA_TICKETS,
    })
    fetchData({ rows })
      .then((data) => {
        dispatch({
          type: SUCCESS_DATA_TICKETS,
          data,
        })
      })
      .catch((_) => {
        dispatch({
          type: ERROR_REQUEST,
        })
      })
  }
}

export { getDataFromApi }
