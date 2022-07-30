import supertest from 'supertest';
import app from '../index';
import path from 'path';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Endpoint testing using jasmine & supertest', (): void => {
  it('gets /', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('gets /api', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets /api/images', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images'
    );
    expect(response.status).toBe(200);
  });

  it('gets /api/images?filename=fjord&height=199 (missing args)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&height=199'
    );
    expect(response.status).toBe(200);
  });

  it('gets /api/images?filename=fjord&width=199&height=199 (valid args)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=199&height=199'
    );
    expect(response.status).toBe(200);
  });

  it('gets /api/images?filename=fjord&width=-200&height=200 (invalid args)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=-200&height=200'
    );

    expect(response.status).toBe(200);
  });
});

import * as fsExtra from 'fs-extra';
// Erasing test files
afterAll(async (): Promise<void> => {
  fsExtra.emptyDirSync(path.resolve(__dirname, '../../assets/images/thumb'));
});
