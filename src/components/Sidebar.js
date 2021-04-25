import menu from '../menu'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                {menu.map(item => (
                    <li><Link to={item.path}>{item.text}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
