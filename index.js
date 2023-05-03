const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('chef website running')
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selecRecipe = chef.find(singleRecipe => singleRecipe.id == id);
    res.send(selecRecipe);
})

app.listen(port, () => {
    console.log(`chef resurant ${port}`);
})