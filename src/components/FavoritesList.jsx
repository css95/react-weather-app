import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

function FavoritesList () {

    const { favorites } = useContext(FavoritesContext);
    const navigate = useNavigate();


    return (
        <div className="favorites-list">
            <h2>Saved cities</h2>
            {favorites.map(favorite => {
            return (
                <button key={favorite.id} onClick={() => navigate(`/city/${favorite.city.toLowerCase()}`)}>
                    {favorite.city}
                </button>
            )
            })}
        </div>
    )
    
}

export default FavoritesList

