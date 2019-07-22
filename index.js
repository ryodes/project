const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    const users = require('./fixtures').users;
    res.status(200).send({ users });
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = require('./fixtures').users[userId];

    if (!user) res.status(404).send({ message: `L'utilisateur n'existe pas` });
    else
        res.status(200).send({ user });
})
app.listen(PORT,
    () => console.log(`Server listening on ${PORT}`));