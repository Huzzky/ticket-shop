import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CardEvent from './CardEvents/CardEvent'

const Events = ({ isFetchingData }) => {
  return isFetchingData ? <h1>Загрузка</h1> : <CardEvent />
}

Events.propTypes = {
  isFetchingData: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isFetchingData: state.ticketsReducer.isFetchDataTickets,
})

export default connect(mapStateToProps)(Events)
