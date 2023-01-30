import '../styles/SearchBar.css';
import { useState, useId } from 'react';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

function SearchBar({ label, onChange }) {
    const [text, setText] = useState('');
    const inputId = useId();

    const handleChange = event => {
        const newText = event.target.value;
        setText(newText);
        onChange(event);
    };

    return <div className='search-bar'>
        <input
            className='search-bar__input'
            type='text' id={inputId}
            placeholder={label}
            autoComplete='on'
            onChange={handleChange}
            value={text}
        />
        <label
            className='search-bar__label'
            htmlFor={inputId}
        >
            {label}
        </label>
        <button className='search-bar__button'>
            <SearchIcon className='search-bar__icon' />
        </button>
    </div>
}

export default SearchBar;
