import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand" to="/">Crypto Curr</Link>
        </header>
    )
}

export default Header
