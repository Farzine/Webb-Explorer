require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const frontUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;


////////////////////////////////////////////////////////////////////
// const authRouter = require("./routes/auth/auth-routes");
////////////////////////////////////////////////////////////////////


const { MONGO_URI } = require('./config/config');

const corsOptions ={
  origin:`${frontUrl}`, 
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma",
  ],
  credentials:true,            
  optionSuccessStatus:200,
}

const app = express();
const PORT = 5000;

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());



// app.use('/admin', adminRoutes);


app.get('/', (req, res) => {
  res.send('Welcome WebXplorer');
});

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
