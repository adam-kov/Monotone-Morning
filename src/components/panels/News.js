import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function News({ settings, mode }) {
    const [news, setNews] = useState([]);
    const [message, setMessage] = useState('');
    const style = {
        bottom: '3vh',
        right: 'calc(1vw + 100px)',
        width: '20vw',
        maxWidth: '800px',
        maxHeight: '50vh',
        overflowY: 'scroll',
        fontSize: '1rem',
        scrollBehavior: 'smooth',
    }
    const articleStyle = {
        position: 'relative',
        textAlign: 'left',
        fontSize: '1.1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        backgroundColor: mode ? 'rgba(238, 238, 238, 0.7)' : 'rgba(34, 34, 34, 0.7)',
        width: '100%',
        minHeight: '100px',
        padding: '5px',
        margin: '10px 0',
    }
    useEffect(() => {
        const url = `/api/news?country=${settings.country}${settings.category !== 'all' ? '&category=' + settings.category : ''}`;
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
        <div style={style} className={`news-panel ${mode ? 'panel-light' : 'panel'}`}>
            <h2 className='title'>News</h2>
            {message !== '' && message}
            {message === '' && news.map((element, index) => {
                return (
                    <table className='news-article' onClick={() => window.open(element.url, '_blank')} style={articleStyle} key={`${element.title}${index}`}>
                        <tbody>
                            <tr>
                                <td style={{width: '75%'}}>
                                    {element.title}
                                </td>
                                <td style={{width: '25%', backgroundImage: `url(${element.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}
