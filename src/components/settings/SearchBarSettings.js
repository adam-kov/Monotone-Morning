import React from 'react'

export default function SearchBarSettings({ settings, setSettings }) {
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '32px',
    }
    return (
        <div style={style}>
            Search engine
            <select style={{float: 'right', padding: '4px', marginTop: '2px'}} defaultValue={settings.engine} name='searchEngine' id='searchEngine' 
            onChange={e => {
                setSettings(prev => {
                    const next = [...prev];
                    next[4].engine = e.target.value;
                    return next;
                })
            }} >
                <option value='Google'>Google</option>
                <option value='DuckDuckGo'>DuckDuckGo</option>
                <option value='Bing'>Bing</option>
            </select>
        </div>
    )
}
