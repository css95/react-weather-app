import { useState } from "react";

function SearchForm() {

    const [citySearch, setCitySearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`You searched for '${citySearch}'`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> 
                    City...
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