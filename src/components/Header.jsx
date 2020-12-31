import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const Header = ({ data }) => {
  useEffect(() => {
    console.log(data)
  }, [data])
  return <div></div>
}

Header.propTypes = {
  data: PropTypes.array,
}

const mapStoreToProps = ({ ticketsReducer }) => ({
  data: ticketsReducer.data,
})

export default connect(mapStoreToProps)(Header)
