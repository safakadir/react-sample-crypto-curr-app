import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { acToggleTheme } from '../store/actionCreators'

const Header = () => {
    const dispatch = useDispatch()
    const dark = useSelector(state => state.theme.dark)

    const handleToggleTheme = () => {
        dispatch(acToggleTheme())
        localStorage.setItem('dark', !dark)
    }

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand" to="/">Crypto Curr</Link>
            <button className="btn btn-outline-secondary btn-sm mx-3" onClick={handleToggleTheme}>
                <i className="bi-droplet-half"></i>
            </button>
        </header>
    )
}

export default Header
