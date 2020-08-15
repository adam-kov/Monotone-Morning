import React, { useState } from 'react'

export default function SearchBar({ settings }) {
    const [query, setQuery] = useState('');
    const style = {
        position: 'fixed',
        top: '36vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30vw',
        maxWidth: '600px',
        height: window.innerWidth > 3000 ? '180px' : '150px',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        borderRadius: '10px',
        padding: '10px',
        color: '#eee',
        fontSize: '1.2rem',
        textAlign: 'center',
    }
    const inputStyle = {
        position: 'relative',
        width: '80%',
        height: '30px',
        top: '20px'
    }
    const buttonStyle = {
        position: 'relative',
        top: '30px',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#376891',
        color: '#eee',
        cursor: 'pointer',
    }

    return (
        <div className='search-bar' style={style}>
            <div>Search on {settings.engine}</div>
            <input type='text' style={inputStyle} className='search-bar-input'
            value={query} onChange={e => setQuery(e.target.value)} /> <br/>
            <button style={buttonStyle} onClick={() => {
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
