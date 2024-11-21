//Server Instantiate
const express = require('express');
const app = express();

//Used to parse JSON request bodies
const bodyParser = require('body-parser');

//Specially parse Json data & add it to request.body object
app.use(bodyParser.json());

//Activate the server on 3000 port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


//Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/api/cars', (req, res) =>{
    const {name , brand } = req.body;
    console.log(name)
    console.log(brand)
    res.send('Car added successfully!');
})


const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('Connected Successfull!')})
.catch((err) => {console.log('Error connecting to MongoDB:', err)})

