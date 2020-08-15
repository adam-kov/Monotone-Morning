import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function News({ settings }) {
    const [news, setNews] = useState([]);
    const [message, setMessage] = useState('');
    const style = {
        position: 'fixed',
        bottom: '3vh',
        right: 'calc(3vw + 100px)',
        width: '30vw',
        maxWidth: '600px',
        maxHeight: '30vh',
        overflowY: 'scroll',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        borderRadius: '10px',
        padding: '10px',
        color: '#eee',
        fontSize: '1rem',
        textAlign: 'center',
        scrollBehavior: 'smooth',
    }
    const articleStyle = {
        position: 'relative',
        textAlign: 'left',
        cursor: 'pointer',
        borderRadius: '6px',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        width: '100%',
        minHeight: '100px',
        padding: '5px',
        margin: '10px 0',
    }
    useEffect(() => {
        console.log('Fetching news');
        const url = `/api/news?country=${settings.country}${settings.category ? '&category=' + settings.category : ''}`;
        axios.get(url)
        .then(res => {
            setNews([...res.data.articles]);
            setMessage('');
        })
        .catch(() => {
            setMessage('News are currently unavailable.');
        })
    }, [settings]);
    
    return (
        <div style={style} className='news'>
            <h2>News</h2>
            {message !== '' && message}
            {message === '' && news.map((element, index) => {
                return (
                    <table className='news-article' onClick={() => window.open(element.url, '_blank')} style={articleStyle} key={`${element.title}${index}`}>
                        <tbody>
                            <tr>
                                <td style={{width: '80%'}}>
                                    {element.title}
                                </td>
                                <td style={{width: '20%', backgroundImage: `url(${element.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}
