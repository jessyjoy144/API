const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.get('/city/:city/users', async(req, res) => {
const city = 'London';
try {
    const response = await axios.get(`https://bpdts-test-app.herokuapp.com/city/${city}/users`);
    res.send(response.data);
    res.end();
}
catch (err) {
    console.log(err);
}
})

app.get('*', (req, res) => {
    res.json('No matched request');
})

app.listen(PORT,() => console.log(`Server is listening on http://localhost:${PORT}/city/:city/users`)
)