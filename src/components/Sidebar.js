import menu from '../menu'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul className="nav flex-column">
                    {menu.map(item => (
                        <li key={item.path} className="nav-item">
                            <Link to={item.path} className="nav-link">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
