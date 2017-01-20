import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

 export const Menu = () =>
    <nav className="menu">
        <Link to="/">
            <HomeIcon activeClassName="selected"/>
        </Link>
        <Link to="/add-day">
            <AddDayIcon activeClassName="selected"/>
        </Link>
        <Link to="/list-days">
            <ListDaysIcon activeClassName="selected"/>
        </Link>
    </nav>