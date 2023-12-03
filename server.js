const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


//middlewares
app.use(express.json());

//routers
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));

//port
const port = process.env.port || 8082;
app.listen(port, ()=>console.log(`app is listening on port ${port}`));