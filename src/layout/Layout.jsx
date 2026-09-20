import { Outlet, Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import FavoritesList from '../components/FavoritesList';

function Layout() {
    return (
        <div className="app">
            <header>
                <Link to="/">Weather Today</Link>
                <SearchForm />
            </header>
            <main>
                <Outlet />
            </main>
            <FavoritesList />
        </div>
    );
}

export default Layout;