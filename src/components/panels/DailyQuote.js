import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DailyQuote({ settings }) {
    const [quote, setQuote] = useState([]);
    const style = {
        position: 'fixed',
        bottom: '3vh',
        left: '3vw',
        maxWidth: '30vw',
        maxHeight: '25vh',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        borderRadius: '10px',
        padding: '10px',
        color: '#eee',
        fontSize: '1.2rem',
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
        <div style={style} className='daily-quote'>
            <div className='quote-text'>{quote[1]}</div>
            <div className='quote-author'>{quote[0]}</div>
        </div>
    )
}
