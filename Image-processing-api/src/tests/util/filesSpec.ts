import path from 'path';
import imageResizing from '../../util/imageResizing';
import validate from '../../util/queryValidation';

describe('Test image processing via sharp', (): void => {
  it('expecting an error (invalid width value)', async (): Promise<void> => {
    const error: string | undefined | number = await validate('fjord', '-99', '99');
    expect(error).toBeDefined();
  });

  it('raises an error (filename does not exist)', async (): Promise<void> => {
    const error: string | undefined | number = await validate('foo', '99', '99');
    expect(error).toBeDefined();
  });

  it('succeeds to validate file (existing file, valid size values)', async (): Promise<void> => {
    const error: string | undefined | number = await validate('fjord', '99', '99');
    expect(error).toBeUndefined();
  });

  it('succeeds to write resized thumb file (existing file, valid size values)', async (): Promise<void> => {
    let thumbPath: string | undefined;
    try {
      thumbPath = await imageResizing('fjord', '99', '99');
    } catch {
      thumbPath = undefined;
    }
    expect(thumbPath).toBeDefined();
  });
});

import * as fsExtra from 'fs-extra';
// Erasing test files
afterAll(async (): Promise<void> => {
  fsExtra.emptyDirSync(path.resolve(__dirname, '../../assets/images/thumb'));
});
