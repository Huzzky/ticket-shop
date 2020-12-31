import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataFromApi } from './actions/fetchTicketsDataAction'
import './App.css'
import Header from './components/Header'

function App({ getDataFromApi }) {
  useEffect(() => {
    getDataFromApi(10)
  }, [getDataFromApi])
  return (
    <div className="App">
      <Header />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromApi: (rows) => dispatch(getDataFromApi(rows)),
})

export default connect(null, mapDispatchToProps)(App)
