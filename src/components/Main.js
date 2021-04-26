import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Switch, Route } from 'react-router-dom'

import CoinAssetList from './CoinAssetList'
import CoinAssetDetail from './CoinAssetDetail'
import FAQ from './FAQ'
import About from './About'
import { acNewPage } from '../store/actionCreators'

const Main = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(acNewPage(location.pathname))
    }, [location])

    const pageTitle = useSelector(state => state.navigation.titleCmp)

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>{pageTitle}</h2>
            </div>
            <Switch>
              <Route path="/" exact component={CoinAssetList} />
              <Route path="/coin/:id" component={CoinAssetDetail} />
              <Route path="/about" component={About} />
              <Route path="/faq" component={FAQ} />
            </Switch>
        </main>
    )
}

export default Main
