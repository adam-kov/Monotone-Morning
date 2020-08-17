import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CurrencyRates({ settings, mode }) {
    const [rates, setRates] = useState({});
    const [error, setError] = useState('');
    const style = {
        top: '3vh',
        right: 'calc(1vw + 100px)',
        maxWidth: '30vw',
        maxHeight: '30vh',
        fontSize: '1.2rem',
    }

    useEffect(() => {
        let symbols = '';
        symbols += settings.show.map(element => element);
        const url = `/api/currency?base=${settings.base}&symbols=${symbols}`;
        axios.get(url)
        .then(res => {
            setError('');
            const r = {...res.data.rates}
            for(let p in r) {
                r[p] = r[p].toFixed(3);
            }
            setRates(r);
        })
        .catch(err => {
            console.log(err);
            setError('Currency rates are unavailable at the moment');
        });
    }, [settings]);
    
    return (
        <div style={style} className={`currency-panel ${mode ? 'panel-light' : 'panel'}`}>
            {error !== '' && error}
            {error === '' && <>
                <div style={{marginBottom: '10px'}}>Today 1 <span style={{fontWeight: 'bold'}}>{settings.base}</span> equals:</div>
                {settings.show.map((element, index) => {
                    return <div style={{padding: '3px'}} key={element}>{rates[settings.show[index]]} <span style={{fontWeight: 'bold'}}>{element}</span></div>
                })}
            </>}
        </div>
    )
}
