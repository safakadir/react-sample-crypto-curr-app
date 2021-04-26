import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Crypto Curr</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
