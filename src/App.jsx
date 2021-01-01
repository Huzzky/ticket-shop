import './App.css'
import BoostEvents from './components/BoostEvents'
import Header from './components/Header'
import SearchBar from './components/SearchBar.jsx'

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BoostEvents />
    </div>
  )
}

export default App
