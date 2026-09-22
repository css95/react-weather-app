import { Outlet, Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import FavoritesList from '../components/FavoritesList';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <Link className={styles.title} to="/">Weather Today</Link>
                    <SearchForm />
                </header>
                <main className={styles.main}>
                    <Outlet />
                </main>
                <FavoritesList />
            </div>
        </div>
    );
}

export default Layout;