import express from 'express';
import APIroutes from './api/images';

const routes: express.Router = express.Router();

routes.use('/api', APIroutes);

routes.get('/', async (_req, res): Promise<void> => {
  res.render('index.ejs');
});

export default routes;
