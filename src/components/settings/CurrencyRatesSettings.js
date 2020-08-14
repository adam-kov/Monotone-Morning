import React, { useState } from 'react'

export default function CurrencyRatesSettings({ settings, setSettings }) {
    const [temp, setTemp] = useState({...settings});
    const style = {
        fontSize: '1.1rem',
        width: '80%',
        marginLeft: '30px',
        padding: '10px 0',
        lineHeight: '32px',
    }

    function currencySelector(selected, id, showNone) {
        return (
            <select style={{float: 'right', padding: '4px', marginTop: '2px'}} defaultValue={selected} name='currencies' id='currencies' 
            onChange={e => {
                handleInputChange(e.target.value, id);
                if(id > 0) e.target.value = selected;
                if(id === 9) e.target.value = 'none';
            }} >
                {showNone && <option value='none'>None</option>}
                {(temp.base !== 'AUD' || id === -1) && <option value='AUD'>AUD</option>}
                {(temp.base !== 'BGN' || id === -1) && <option value='BGN'>BGN</option>}
                {(temp.base !== 'BRL' || id === -1) && <option value='BRL'>BRL</option>}
                {(temp.base !== 'CAD' || id === -1) && <option value='CAD'>CAD</option>}
                {(temp.base !== 'CHF' || id === -1) && <option value='CHF'>CHF</option>}
                {(temp.base !== 'CNY' || id === -1) && <option value='CNY'>CNY</option>}
                {(temp.base !== 'CZK' || id === -1) && <option value='CZK'>CZK</option>}
                {(temp.base !== 'DKK' || id === -1) && <option value='DKK'>DKK</option>}
                {(temp.base !== 'EUR' || id === -1) && <option value='EUR'>EUR</option>}
                {(temp.base !== 'GBP' || id === -1) && <option value='GBP'>GBP</option>}
                {(temp.base !== 'HKD' || id === -1) && <option value='HKD'>HKD</option>}
                {(temp.base !== 'HRK' || id === -1) && <option value='HRK'>HRK</option>}
                {(temp.base !== 'HUF' || id === -1) && <option value='HUF'>HUF</option>}
                {(temp.base !== 'IDR' || id === -1) && <option value='IDR'>IDR</option>}
                {(temp.base !== 'ILS' || id === -1) && <option value='ILS'>ILS</option>}
                {(temp.base !== 'INR' || id === -1) && <option value='INR'>INR</option>}
                {(temp.base !== 'ISK' || id === -1) && <option value='ISK'>ISK</option>}
                {(temp.base !== 'JPY' || id === -1) && <option value='JPY'>JPY</option>}
                {(temp.base !== 'KRW' || id === -1) && <option value='KRW'>KRW</option>}
                {(temp.base !== 'MXN' || id === -1) && <option value='MXN'>MXN</option>}
                {(temp.base !== 'MYR' || id === -1) && <option value='MYR'>MYR</option>}
                {(temp.base !== 'NOK' || id === -1) && <option value='NOK'>NOK</option>}
                {(temp.base !== 'NZD' || id === -1) && <option value='NZD'>NZD</option>}
                {(temp.base !== 'PHP' || id === -1) && <option value='PHP'>PHP</option>}
                {(temp.base !== 'PLN' || id === -1) && <option value='PLN'>PLN</option>}
                {(temp.base !== 'RON' || id === -1) && <option value='RON'>RON</option>}
                {(temp.base !== 'RUB' || id === -1) && <option value='RUB'>RUB</option>}
                {(temp.base !== 'SEK' || id === -1) && <option value='SEK'>SEK</option>}
                {(temp.base !== 'SGD' || id === -1) && <option value='SGD'>SGD</option>}
                {(temp.base !== 'THB' || id === -1) && <option value='THB'>THB</option>}
                {(temp.base !== 'TRY' || id === -1) && <option value='TRY'>TRY</option>}
                {(temp.base !== 'USD' || id === -1) && <option value='USD'>USD</option>}
                {(temp.base !== 'ZAR' || id === -1) && <option value='ZAR'>ZAR</option>}
            </select>
        )
    }
    function handleInputChange(value, id) {
        if(id === -1) {                                             // the base
            if(temp.show.includes(value)) {
                const index = temp.show.indexOf(value);
                const arr = [...temp.show];
                arr.splice(index, 1);
                setTemp(prev => ({...prev, show: [...arr]}));
            }
            setTemp(prev => ({...prev, base: value}));
        } else {                                                    // other currencies
            if(value !== 'none' && !temp.show.includes(value)) {
                if(temp.show[id] && temp.show[id] !== 'none') {         // changing existing
                    const arr = [...temp.show];
                    arr[id] = value;
                    setTemp(prev => ({...prev, show: [...arr]}));
                } else {                                                // adding new
                    setTemp(prev => ({...prev, show: [...prev.show, value]}));
                }
            } else if(!temp.show.includes(value)) {                     // removing existing
                const arr = [...temp.show];
                if(arr[id]) {
                    arr.splice(id, 1);
                    setTemp(prev => ({...prev, show: [...arr]}));
                }
            }
        }
    }

    return (
        <div style={style}>
            <div style={{marginBottom: '10px'}}>
                Base
                {currencySelector(temp.base, -1, false)}
            </div>
            <div>
                Currency 1
                {currencySelector(temp.show[0], 0, false)}
            </div>
            {temp.show.map((element, index) => {
                return index > 0 ? (
                    <div key={element}>
                        Currency {index+1}
                        {currencySelector(temp.show[index], index, true)}
                    </div>
                ) : null;
            })}
            {temp.show.length < 6 && 
                <div>
                    Currency {temp.show.length+1}
                    {currencySelector('none', 9, true)}
                </div>
            }
            <div style={{textAlign: 'center', paddingTop: '10px', height: '50px'}}>
                <button className='settings-reload-button' onClick={() => {setSettings(prev => {
                    const next = [...prev];
                    next[5] = {...temp};
                    return next;
                })}}>Reload</button>
            </div>
        </div>
    )
}
