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
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Page Title</h2>
            </div>
            <Switch>
              <Route path="/" exact component={CoinAssetList} />
              <Route path="/coin/:id" component={CoinAssetDetail} />
              <Route path="/about" component={About} />
              <Route path="/faq" component={FAQ} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
