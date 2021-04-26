import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Switch, Route } from 'react-router-dom'

import CoinAssetList from './CoinAssetList'
import CoinAssetDetail from './CoinAssetDetail'
import FAQ from './FAQ'
import About from './About'
import Toast from './fundamental/Toast'
import Select from './fundamental/Select'

import { acClearErrorCoinAssets, acNewPage, acSetCurrencyId } from '../store/actionCreators'
import { fetchRate } from '../store/currencySlice'
import utils from '../utils'
import constants from '../constants'

const Main = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(acNewPage(location.pathname))
    }, [location, dispatch])

    const pageTitle = useSelector(state => state.navigation.titleCmp)
    const error = useSelector(state => state.coinAssets.error)

    const clearError = () => {
      dispatch(acClearErrorCoinAssets())
    }

    const handleCurrencySelect = (currency) => {
      console.log("SELECT:"+currency.id)
      dispatch(acSetCurrencyId(currency.id))
      dispatch(fetchRate(currency.id))
    }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>{pageTitle}</h2>
              <Select items={constants.currencies} onSelect={handleCurrencySelect} visualizor={c => c.displayName} />
            </div>
            <Switch>
              <Route path="/" exact component={CoinAssetList} />
              <Route path="/coin/:id" component={CoinAssetDetail} />
              <Route path="/about" component={About} />
              <Route path="/faq" component={FAQ} />
            </Switch>
            { !utils.isEmpty(error) && <Toast title="Error" message={error} onClose={clearError} /> }
        </main>
    )
}

export default Main
