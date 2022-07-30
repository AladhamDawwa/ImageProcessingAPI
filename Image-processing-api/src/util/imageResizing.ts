import path from 'path';
import sharp from 'sharp';

const resizeImage = async (
  filename: string,
  width: string,
  height: string
): Promise<string> => {
  const thumbPath: string = path.resolve(
    __dirname,
    '../../assets/images/thumb/',
    `${filename}-${width}x${height}.jpg`
  );
  await sharp(
    path.resolve(__dirname, '../../assets/images/full/', `${filename}.jpg`)
  )
    .resize(parseInt(width as string), parseInt(height as string))
    .toFile(thumbPath);
  return thumbPath;
};

export default resizeImage;
