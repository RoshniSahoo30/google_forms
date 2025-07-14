const express = require('express');
 const app= express();

var cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.redirect('http://localhost:3000');
  });

app.post('/form-submit', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);

    res.status(200).json({ message: 'Form data received successfully!' });
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
})