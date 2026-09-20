import { Outlet, Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import FavoritesList from '../components/FavoritesList';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.app}>
            <header className={styles.app}>
                <Link to="/">Weather Today</Link>
                <SearchForm />
            </header>
            <main className={styles.app}>
                <Outlet />
            </main>
            <FavoritesList />
        </div>
    );
}

export default Layout;