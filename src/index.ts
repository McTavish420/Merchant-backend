import "reflect-metadata";
import express, { Request, Response } from 'express';
import * as cors from 'cors';
import * as globals from './globals';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors.default());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} and the first initialization is complete and user here ${globals.DATABASE_PASSWORD}, schema  ${globals.DATABASE_SCHEMA}`);
});

export default app;