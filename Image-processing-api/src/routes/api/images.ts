import express from 'express';
import path from 'path';
import validate from '../../util/queryValidation';
import resizeImage from '../../util/imageResizing'; // Image handling

const APIroutes: express.Router = express.Router();

APIroutes.get('/images', async (req: express.Request, res: express.Response): Promise<void> => {
  // Check whether request can be worked with
  const validationMessage: void | string | number = await validate(
    req.query.filename as string,
    req.query.width as string,
    req.query.height as string
  );
  if (typeof validationMessage == 'number') {
    res.sendFile(path.resolve(
      __dirname,
      '../../../assets/images/thumb',
      `${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
    ));
  }
  else if (validationMessage) {
    res.send(validationMessage);
  } else {
    const thumbPath: string = await resizeImage(
      req.query.filename as string,
      req.query.width as string,
      req.query.height as string
    );
    res.sendFile(thumbPath);
  }
});

APIroutes.get('/', async (_req: express.Request, res: express.Response): Promise<void> => {
  res.render('index.ejs');
});

export default APIroutes;
