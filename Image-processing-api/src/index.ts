import express from 'express';
import routes from './routes/index';

const app: express.Application = express();
const port: number = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  console.log(`server is running at http://localhost:${port}`);
});

export default app;
