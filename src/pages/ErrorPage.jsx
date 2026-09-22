import { Link } from "react-router-dom";
import styles from './ErrorPage.module.css';

function ErrorPage () {
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.title}>This page does not exist</h1>
            <Link className={styles.link} to="/">
            Go back to the start page by clicking here!
            </Link>
        </div>
    )
}

export default ErrorPage;