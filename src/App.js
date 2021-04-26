import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'

import constants from './constants'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

axios.defaults.baseURL = constants.baseURL

function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
