import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import constants from './constants'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CoinAssetList from './components/CoinAssetList'
import CoinAssetDetail from './components/CoinAssetDetail'
import FAQ from './components/FAQ'
import About from './components/About'

axios.defaults.baseURL = constants.baseURL

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Sidebar />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <Switch>
              <Route path="/" exact component={CoinAssetList} />
              <Route path="/coin/:id" component={CoinAssetDetail} />
              <Route path="/about" component={About} />
              <Route path="/faq" component={FAQ} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
