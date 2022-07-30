import { promises as fs } from 'fs';
import path from 'path';

const getAvailableImageNames = async (): Promise<string[]> => {
  try {
    return (
      await fs.readdir(path.resolve(__dirname, '../../assets/images/full'))
    ).map((filename: string): string => filename.split('.')[0]);
  } catch {
    return [];
  }
};

const validate = async (
  filename: string,
  width: string,
  height: string
): Promise<undefined | string> => {
  // Check image availability
  try {
    if (!(await getAvailableImageNames()).includes(filename as string)) {
      return `Please enter a valid filename.`;
    }
  } catch {
    return `Please enter a valid filename.`;
  }

  try {
    // Check for valid height value
    const h: number = parseInt(height || '');
    if (Number.isNaN(h) || h < 1) {
      return 'Please enter a valid height.';
    }
  } catch {
    return 'Please enter a valid height.';
  }

  try {
    // Check for valid width value
    const w: number = parseInt(width || '');
    if (Number.isNaN(w) || w < 1) {
      return 'Please enter a valid width.';
    }
  } catch {
    return 'Please enter a valid width.';
  }

  try {
    await fs.access(
      path.resolve(
        __dirname,
        '../../assets/images/thumb/',
        `${filename}-${width}x${height}.jpg`
      )
    );
    return 'image exists already at thumb folder';
  } catch {
    return;
  }
};

export default validate;
