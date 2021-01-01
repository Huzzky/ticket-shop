import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ImgCardEvent } from './ImgCardEvent'

const CardEvent = ({ data }) => {
  let cardEvent = data.map((index, key) => {
    return (
      <div>
        <div>
          <ImgCardEvent />
        </div>
        <h1>{index.title_group}</h1>
      </div>
    )
  })
  return <div>{cardEvent}</div>
}

CardEvent.propTypes = {
  data: PropTypes.array,
}
const mapStateToProps = (state) => ({
  data: state.ticketsReducer.data,
})

export default connect(mapStateToProps)(CardEvent)
