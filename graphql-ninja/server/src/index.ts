import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(3000, () => console.log('listening on port (http://localhost:3000/)'));
