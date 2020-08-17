import React, { useState } from 'react'

export default function SearchBar({ settings, mode }) {
    const [query, setQuery] = useState('');
    const style = {
        top: '20vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30vw',
        maxWidth: '600px',
        minHeight: '140px',
        height: '8vh',
        maxHeight: '180px',
        fontSize: '1.4rem',
    }
    const inputStyle = {
        position: 'relative',
        width: '85%',
        height: '25px',
        top: '20px'
    }
    const buttonStyle = {
        position: 'relative',
        top: '30px',
        padding: '10px 25px',
    }

    return (
        <div className={`search-bar-panel ${mode ? 'panel-light' : 'panel'}`} style={style}>
            <label htmlFor='search-input'>Search on {settings.engine}</label>
            <input type='text' name='search-input' style={inputStyle} className='search-bar-input'
            value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => {
                if(e.keyCode === 13) document.getElementById('search-button').click();
            }} /> <br/>
            <button id='search-button' className='settings-reload-button' style={buttonStyle} onClick={() => {
                if(query) {
                    setQuery('');
                    if(settings.engine === 'Google') window.open(`https://www.google.com/search?q=${query}`, '_blank');
                    else if(settings.engine === 'DuckDuckGo') window.open(`https://duckduckgo.com/?q=${query}`, '_blank');
                    else if(settings.engine === 'Bing') window.open(`https://www.bing.com/search?q=${query}`, '_blank');
                }
            }}>Search</button>
        </div>
    )
}
