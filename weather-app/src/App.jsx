import CityForecast from './components/CityForecast'
import CityList from './components/CityList'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  return (
    <Router>
      <Routes>
    
        <Route path="/" element = {<CityList />}/>
            
        <Route path="/forecast/:city" element = {<CityForecast />}/>

      </Routes>
    </Router>
  )
}

export default App
