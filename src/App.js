import axios from 'axios'
import CoinAssetList from './components/CoinAssetList'
import constants from './constants'

axios.defaults.baseURL = constants.baseURL

function App() {
  return (
    <div className="App">
      <CoinAssetList />
    </div>
  );
}

export default App;
