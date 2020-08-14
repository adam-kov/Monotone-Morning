import React from 'react'

export default function TimeAndDateSettings({ settings, setSettings }) {
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '32px',
    }
    return (
        <div style={style}>
            <span>Show seconds</span>
            <label className='settings-switch'>
                <input type='checkbox' checked={settings[0].showSeconds} readOnly />
                <span className='settings-slider' onClick={() => {          // PANEL TOGGLE
                    const next = [...settings];
                    next[0].showSeconds = !next[0].showSeconds;
                    setSettings(next);
                }}/>
            </label><br/>
            <span>Show year</span>
            <label className='settings-switch'>
                <input type='checkbox' checked={settings[0].showYear} readOnly />
                <span className='settings-slider' onClick={() => {          // PANEL TOGGLE
                    const next = [...settings];
                    next[0].showYear = !next[0].showYear;
                    setSettings(next);
                }}/>
            </label>
        </div>
    )
}
