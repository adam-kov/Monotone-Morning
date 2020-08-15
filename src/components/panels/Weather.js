import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Weather({ settings, setSettings }) {
    const [message, setMessage] = useState('Allow geolocation or enter a city name in the settings.');
    const [weather, setWeather] = useState({});
    const [denied, setDenied] = useState(false);
    const style = {
        position: 'fixed',
        top: '36vh',
        left: '3vw',
        maxWidth: '30vw',
        maxHeight: '35vh',
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        borderRadius: '10px',
        padding: '10px',
        color: '#eee',
        fontSize: '1.1rem',
    }
    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#376891',
        color: '#eee',
        cursor: 'pointer',
    }

    function getCoords() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                localStorage.setItem('lat', pos.coords.latitude);
                localStorage.setItem('lon', pos.coords.longitude);
            }, err => {
                console.log(`${err.code}: ${err.message}`);
                setDenied(true);
                setMessage('Geolocation is denied. Enter a city name in the settings to see the weather.');
            });
            setSettings(prev => {
                const next = [...prev];
                next[1] = {...settings, lat: localStorage.getItem('lat'), lon: localStorage.getItem('lon')};
                return next;
            });
            return true;
        }
        return false;
    }

    useEffect(() => {
        getCoords();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if(settings.city !== '') {
            const url = `/api/weather?q=${settings.city}&units=${settings.unit}`;
            axios.get(url)
            .then(res => {
                setWeather({
                    city: res.data.name,
                    icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@${window.innerHeight > 930 ? 4 : 2}x.png`,
                    description: res.data.weather[0].description,
                    temp: res.data.main.temp,
                    tempMax: res.data.main.temp_max.toFixed(0),
                    tempMin: res.data.main.temp_min.toFixed(0),
                })
                if(message !== '') setMessage('')
            })
            .catch(() => {
                setMessage(`Sorry, couldn't find a city named '${settings.city}'. Please check if you entered the name correctly.`);
            });
        } else {
            if(settings.lat !== null && settings.lon !== null) {
                const url = `/api/weather?lat=${settings.lat}&lon=${settings.lon}&units=${settings.unit}`;
                axios.get(url)
                .then(res => {
                    setWeather({
                        city: res.data.name,
                        icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@${window.innerHeight > 930 ? 4 : 2}x.png`,
                        description: res.data.weather[0].description,
                        temp: res.data.main.temp,
                        tempMax: res.data.main.temp_max.toFixed(0),
                        tempMin: res.data.main.temp_min.toFixed(0),
                    })
                    if(message !== '') setMessage('')
                })
                .catch(err => {
                    console.log(err);
                    setMessage('Sorry, weather forecast is not available right now.');
                });
            } else {
                setMessage('Location unknown. Grant access to your location or enter a city name in the settings.')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings])
    
    return (
        <div style={style}>
            {message !== '' && 
                <div>
                    <h3>Weather forecast</h3>
                    <div>{message}</div>
                    {!denied && <button style={buttonStyle} onClick={getCoords}>Use my location</button>}
                </div>
            }
            {message === '' && 
                <div>
                    <div style={{fontSize: '1.4rem'}}>{weather.city}</div>
                    <img src={weather.icon} alt='Weather icon' style={{marginTop: '-25px'}} />
                    <div style={{marginTop: '-25px'}}>
                        <div>{weather.description}</div>
                        <h3>{weather.temp}{settings.unit === 'metric' ? '°C' : '°F'}</h3>
                        <div>
                            <span style={{padding: '0 10px'}}>min: {weather.tempMin}{settings.unit === 'metric' ? '°C' : '°F'}</span>
                            <span style={{padding: '0 10px'}}>max: {weather.tempMax}{settings.unit === 'metric' ? '°C' : '°F'}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
