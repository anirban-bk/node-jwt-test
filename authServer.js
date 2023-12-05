const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


//middlewares
app.use(express.json());

//routers
//app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
//app.use('/token', require('./routes/login'));

//port
const port = 8085;
app.listen(port, ()=>console.log(`app is listening on port ${port}`));