import PropTypes from 'prop-types'
import { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from '../actions/fetchTicketsDataAction'
import Events from './Events'

const BoostEvents = ({ getDataFromApi }) => {
  useLayoutEffect(() => {
    getDataFromApi()
  }, [getDataFromApi])
  return <Events />
}

BoostEvents.propTypes = {
  getDataFromApi: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromApi: () => dispatch(getDataFromApi()),
})

export default connect(null, mapDispatchToProps)(BoostEvents)
