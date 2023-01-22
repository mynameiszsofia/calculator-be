import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
const port = Number(process.env.PORT ?? 8080);

app.use(cors());

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
})