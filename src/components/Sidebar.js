import pages from '../pages'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    {pages.filter(item => !item.parent).map(item => (
                        <li key={item.path} className="nav-item">
                            <Link to={item.path} className="nav-link">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
