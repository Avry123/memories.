import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));

app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello to memories API');
})

// const CONNECTION_URL = "mongodb+srv://chalkeavry:neelchalke@cluster0.orujxlq.mongodb.net/?retryWrites=true&w=majority";

const PORT = PORT;

mongoose.connect(CONNECTION_URL).then(() => app.listen( PORT || 5000 , () => console.log(`Server is running on: ${PORT} `))).catch((err) => console.log(err))

// mongoose.set('useFindAndModify', false);