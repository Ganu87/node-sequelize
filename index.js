const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/customer',customerRoute);
app.use('/api/order',orderRoute);

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});