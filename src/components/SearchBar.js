import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input
                        value={term} 
                        type="text" 
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;