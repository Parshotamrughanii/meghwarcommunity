const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cors =  require('cors')


connectDB();
const app  = express();
app.use(express.json());
// Enable CORS for all routes
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use('/api',require('./routes/userRoutes'))

app.listen(port,()=>console.log(`Server started on port ${port}`))