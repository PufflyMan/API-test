const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

app.get('/cat', (req, res) => {
    res.status(200).send({
        cat: '(=^･ω･^=)',
        color: 'orange'
    })
});

app.post('/cat/:id', (req, res) => {

    const { id } = req.params
    const { name } = req.body

    if (!name) {
        res.status(418).send({ message: 'Cat is sad that it has no name :(' })
    }

    res.send({
        cat: `Cutie is named ${name} and has special number and it's ${id}`
    })
})