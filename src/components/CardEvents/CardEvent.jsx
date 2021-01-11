import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ImgCardEvent } from './ImgCardEvent'
import '../../assets/_events.scss'
import smallerPriceFunc from '../../utils/smallerPrice'

const CardEvent = ({ data }) => {
  let cardEvent = data.map((index, key) => {
    const date_event = new Date(index.date)
    return (
      <div key={key} className="events__card card">
        <div className="card__img">
          <ImgCardEvent />
        </div>
        <div className="card__text-info">
          <h1 className="card__title">{index.title_group}</h1>
          <p className="card__smallest-price">
            Price from {smallerPriceFunc(index.range_price)} rub.
          </p>
          <div className="card__address address">
            <p className="address__country">Country: {index.country}</p>
            <p className="address__city">City: {index.city}</p>
          </div>
          <p className="card__date-event">
            {date_event.getFullYear()}-{date_event.getMonth() + 1}-
            {date_event.getDate()}
          </p>
        </div>
        <button className="card__button-but">Buy</button>
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
