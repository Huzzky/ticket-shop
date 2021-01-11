import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ImgCardEvent } from './ImgCardEvent'
import '../../assets/_events.scss'
import smallerPriceFunc from '../../utils/smallerPrice'

const CardEvent = ({ data }) => {
  let cardEvent = data.map((index, key) => {
    return (
      <div key={key} className="events__card card">
        <div className="card__img">
          <ImgCardEvent />
        </div>
        <div className="card__text-info">
          <h1 className="card__title">{index.title_group}</h1>
          <p className="card__smallest-price">
            {smallerPriceFunc(index.range_price)}
          </p>
        </div>
      </div>
    )
  })
  return <div className="events">{cardEvent}</div>
}

CardEvent.propTypes = {
  data: PropTypes.array,
}
const mapStateToProps = (state) => ({
  data: state.ticketsReducer.data,
})

export default connect(mapStateToProps)(CardEvent)
