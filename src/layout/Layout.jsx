import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className="app">
            <header>
                <Link to="/">Weather Today</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;