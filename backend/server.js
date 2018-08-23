// server.js
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/apiroutes';

const app = express();

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

// base
app.use('/api', apiRoutes);

// Production or Dev?
let API_PORT = 3001;

if (process.env.NODE_ENV === 'production') {
  API_PORT = 3000;
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
