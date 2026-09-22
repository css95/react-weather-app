import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import styles from './FavoritesList.module.css';

function FavoritesList () {

    const { favorites } = useContext(FavoritesContext);
    const navigate = useNavigate();


    return (
        <div className={styles.favoritesList}>
            <h2 className={styles.heading}>Saved cities</h2>
            {favorites.length === 0 ? (
                <p className={styles.emptyState}>No saved cities yet</p>
            ) : (
                <div className={styles.chipRow}>
                {favorites.map(favorite => {
                    return (
                        <button key={favorite.id} className={styles.chip} onClick={() => navigate(`/city/${favorite.city.toLowerCase()}`)}>
                            {favorite.city}
                        </button>
                    )
                })}

                </div>
            )}
        </div>
    )
    
}

export default FavoritesList

