const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/bg', (req, res) => {
    const category = req.query.categories || 111;
    const purity = req.query.purity || 110;
    const atleast = req.query.atleast || '100x100';
    const resolutions = req.query.resolutions;
    const url = `https://wallhaven.cc/api/v1/search?apikey=
        ${process.env.BACKGROUND_API_KEY}&categories=${category}&purity=${purity}
        &${resolutions !== undefined ? 'resolutions=' + resolutions : 'atleast=' + atleast}`;
    axios.get(url)
        .then(apiResponse => {
            res.setHeader('Content-Type', 'application/json');
            res.send(apiResponse.data.data);
        })
        .catch(error => console.log(error));
});
app.get('/api/quote', (req, res) => {
    const url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    axios.get(url)
    .then(apiResponse => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiResponse.data);
    })
    .catch(error => console.log(error));
});
app.get('/api/weather', (req, res) => {
    const city = req.query.q || null;
    const lat = req.query.lat || 48.864716;
    const lon = req.query.lon || 2.349014;
    const unit = req.query.units;
    const url = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.WEATHER_API_KEY}` : 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.WEATHER_API_KEY}`;
    axios.get(url)
    .then(apiResponse => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiResponse.data);
    })
    .catch(error => {
        res.send(error);
    });
});
app.get('/api/currency', (req, res) => {
    const base = req.query.base || 'EUR';
    const symbols = req.query.symbols;
    const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
    axios.get(url)
    .then(apiResponse => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiResponse.data);
    })
    .catch(error => {
        res.send(error);
    });
});
app.get('/api/news', (req, res) => {
    const country = req.query.country || 'us';
    const category = req.query.category;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}${category ? '&category=' + category : ''}&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`
    axios.get(url)
    .then(apiResponse => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiResponse.data);
    })
    .catch(error => {
        res.send(error);
    });
});

app.listen(port, () => console.log('Server running on port ' + port));