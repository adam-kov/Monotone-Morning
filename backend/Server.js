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
    const category = req.query.category || 111;
    const purity = req.query.purity || 110;
    const atleast = req.query.atleast || '100x100';
    const resolutions = req.query.resolutions;
    const url = `https://wallhaven.cc/api/v1/search?apikey=
        ${process.env.BACKGROUND_API_KEY}&category=${category}&purity=${purity}
        &${resolutions !== undefined ? 'resolutions=' + resolutions : 'atleast=' + atleast}`;
    axios.get(url)
    .then(apiResponse => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiResponse.data);
    })
    .catch(error => console.log(error));
    //const apiData = await apiResponse.data.json();
    //res.setHeader('Content-Type', 'application/json');
    //res.send(apiResponse.data);
})

app.listen(port, () => console.log('Server running on port ' + port));