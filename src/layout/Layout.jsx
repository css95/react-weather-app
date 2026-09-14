import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <header>
                <Link to="/">Weather Today</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;