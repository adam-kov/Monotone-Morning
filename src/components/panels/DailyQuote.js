import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DailyQuote({ settings, mode }) {
    const [quote, setQuote] = useState([]);
    const style = {
        bottom: '3vh',
        left: '3vw',
        maxWidth: '20vw',
        maxHeight: '25vh',
        fontSize: '1.2rem',
        overflowY: 'scroll',
    }
    useEffect(() => {
        const url = '/api/quote';
        axios.get(url)
        .then(res => {
            setQuote([res.data.quote.quoteAuthor, res.data.quote.quoteText]);
        })
        .catch(err => {
            console.log(err);
            setQuote(['Admin', 'Quote machine broke'])
        });
    }, [])
    return (
        <div style={style} className={`daily-quote-panel ${mode ? 'panel-light' : 'panel'}`}>
            <div className='quote-text'>{quote[1]}</div>
            <div className='quote-author' style={{fontStyle: 'italic', marginTop: '5px'}}>{quote[0]}</div>
        </div>
    )
}
