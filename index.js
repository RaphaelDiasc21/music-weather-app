const express = require('express');
const bodyParser = require('body-parser');
const Approute = require('./routes/App');

const app = express();

const PORT = process.env.PORT || 3500;

app.use(bodyParser.json());

app.use('/api',Approute);

app.listen(PORT || 3500, ()=>{
    console.log(`Server is running on port ${PORT}`);
})