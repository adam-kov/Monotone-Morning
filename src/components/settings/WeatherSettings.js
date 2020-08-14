import React, { useState } from 'react'

export default function WeatherSettings({ settings, setSettings}) {
    const [temp, setTemp] = useState({...settings[1]});
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '32px',
    }
    const pointer = { cursor: 'pointer' }

    function handleInputChange(value) {
        setTemp(prev => ({...prev, city: value}));
    }

    return (
        <div style={style}>
            <div>
                <span>Unit</span>
                <span style={{float: 'right'}}>
                    <input style={pointer} type='radio' id='metric' name='unit' value='metric' 
                    checked={temp.unit === 'metric'} readOnly onClick={() => {setTemp(prev => ({...prev, unit: 'metric'}));
                    }} />
                    <label style={pointer} htmlFor='metric' onClick={() => {setTemp(prev => ({...prev, unit: 'metric'}));
                    }}>metric</label>
                    <input style={pointer} type='radio' id='imperial' name='unit' value='imperial' 
                    checked={temp.unit === 'imperial'} readOnly onClick={() => {setTemp(prev => ({...prev, unit: 'imperial'}));
                    }} />
                    <label style={pointer} htmlFor='imperial' onClick={() => {setTemp(prev => ({...prev, unit: 'imperial'}));
                    }}>imperial</label>
                </span>
            </div>
            <div>
                <span>City</span>
                <input type='text' style={{float: 'right', height: '24px', marginTop: '4px'}} value={temp.city} onChange={e => handleInputChange(e.target.value)} />
            </div>
            <div style={{textAlign: 'center', paddingTop: '10px', height: '50px'}}>
                <button className='settings-reload-button' onClick={() => {
                    const next = [...settings];
                    next[1] = {...temp};
                    next[1].city = next[1].city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
                    setSettings([...next]);
                }}>Reload</button>
            </div>
        </div>
    )
}
