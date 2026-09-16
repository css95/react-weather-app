import { Outlet, Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

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
        </div>
    );
}

export default Layout;