import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesWrapper from './routes/Routes'

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesWrapper />
      </Router>
    </div>
  )
}

export default App
