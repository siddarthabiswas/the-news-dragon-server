const express = require ('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const categories = require('./data/catagories.json');


app.use(cors());
app.get('/', (req, res) =>{
    res.send('Hello siddartha')
});

app.get('/categories',(req, res) =>{
    res.send(categories)
})

app.listen(port,() =>{
    console.log(`Dragon api is running on port:${port} `)
})