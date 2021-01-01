// import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form className="search-bar__form form">
        <input type="text" className="form__txt-input" />
        <input type="submit" className="form__btn-input" />
      </form>
    </div>
  )
}

// SearchBar.propTypes = {}

export default SearchBar
