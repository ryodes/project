const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    const users = require('./fixtures').users;
    res.status(200).send({users});
})

app.listen(PORT, 
    () => console.log(`Server listening on ${PORT}`));