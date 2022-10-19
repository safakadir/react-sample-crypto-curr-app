import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Switch, Route } from 'react-router-dom'

import CoinAssetList from './pages/CoinAssetList'
import CoinAssetDetail from './pages/CoinAssetDetail'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Sandbox from './pages/Sandbox'
import Toast from './components/fundamental/Toast'
import Select from './components/fundamental/Select'

import { clearCoinAssetsError } from './store/coinAssetsSlice'
import { setCurrency } from './store/currencySlice'
import { newPage } from './store/navigationSlice'
import { fetchRate } from './store/helpers'
import utils from './utils'
import constants from './constants'

const Main = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const selectedCurrency = useSelector(state => state.currency.selectedCurrency)
    const currentRate = useSelector(state => state.currency.currentRate)

    useEffect(() => {
      if(!currentRate) {
        dispatch(fetchRate(selectedCurrency.id))
      }
      dispatch(newPage(location.pathname))
    }, [location, dispatch])

    const pageTitle = useSelector(state => state.navigation.titleCmp)
    const error = useSelector(state => state.coinAssets.error)

    const clearError = () => {
      dispatch(clearCoinAssetsError())
    }

    const handleCurrencySelect = (currency) => {
      dispatch(setCurrency(currency.id))
      dispatch(fetchRate(currency.id))
      localStorage.setItem('currencyId', currency.id)
    }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>{pageTitle}</h2>
              <Select value={selectedCurrency}
                      items={constants.currencies}
                      onSelect={handleCurrencySelect}
                      visualizor={c => c.displayName}
              />
            </div>
            <Switch>
              <Route path="/" exact component={CoinAssetList} />
              <Route path="/coin/:id" component={CoinAssetDetail} />
              <Route path="/about" component={About} />
              <Route path="/faq" component={FAQ} />
              <Route path="/sandbox" component={Sandbox} />
            </Switch>
            { !utils.isEmpty(error) && <Toast title="Error" message={error} onClose={clearError} /> }
        </main>
    )
}

export default Main
