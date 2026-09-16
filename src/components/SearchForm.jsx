import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <form onSubmit={handleSubmit}>
                <label> 
                    Enter City Name
                    <input 
                        value={citySearch}
                        onChange={e => setCitySearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </label>
            </form>   
        </>

    )

}

export default SearchForm