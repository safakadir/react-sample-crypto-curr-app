import axios from 'axios'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import constants from './constants'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

axios.defaults.baseURL = constants.baseURL

function App() {
  const dark = useSelector(state => state.theme.dark)

  return (
    <div className={'application' +(dark ? ' dark' : '')}>
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
