import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './SearchForm.module.css';

function SearchForm() {

    const [citySearch, setCitySearch] = useState('');
    const [validationError, setValidationError] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (citySearch.trim() === '') {
            setValidationError('City name is required');
        } else {
            navigate(`/city/${citySearch.trim().toLowerCase()}`);
            setValidationError('');
        }
    
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    className={styles.input}
                    aria-label="City name"
                    placeholder="Search for a city"
                    value={citySearch}
                    onChange={e => {
                        setCitySearch(e.target.value);
                        setValidationError('');
                    }}
                />
                <button className={styles.button} type="submit">Search</button>
                {validationError && <p>{validationError}</p>}
            </form>   
        </>

    )

}

export default SearchForm