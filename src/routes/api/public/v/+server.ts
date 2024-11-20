// i hate typescript. but, i'm forced to use typescript on the backend to collaborate with uiovasot. 
import type { RequestHandler } from './$types';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const GET: RequestHandler = async () => {
  try {
    const configPath = resolve('src/config/index.json');
    const fileContent = readFileSync(configPath, 'utf-8');
    const data = JSON.parse(fileContent);

    const version = data.version;

    return new Response(
      JSON.stringify({ version }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error reading config file:', error);

    return new Response(
      JSON.stringify({ error: 'Failed to load version data.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
