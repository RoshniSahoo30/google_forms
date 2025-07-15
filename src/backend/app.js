const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FormData = require('./models/FormData');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/google_forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.post('/form-submit', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).json({ message: 'Form data saved to MongoDB!' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.redirect('http://localhost:3000');
});

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
