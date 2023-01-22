require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';
import routes from './route/index'
import {errorHandler} from './middleware/errorHandler'

const app: Express = express();
const port = 5010;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/api/number', routes);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
})