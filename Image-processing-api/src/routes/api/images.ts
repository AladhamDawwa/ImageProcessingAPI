import express from 'express';
import validate from '../../util/queryValidation';
import resizeImage from '../../util/imageResizing'; // Image handling

const APIroutes: express.Router = express.Router();

APIroutes.get('/images', async (req, res): Promise<void> => {
  // Check whether request can be worked with
  const validationMessage: void | string = await validate(
    req.query.filename as string,
    req.query.width as string,
    req.query.height as string
  );
  if (validationMessage) {
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

APIroutes.get('/', async (_req, res): Promise<void> => {
  res.render('index.ejs');
});

export default APIroutes;
