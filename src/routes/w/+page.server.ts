import { redirect } from '@sveltejs/kit';
import config from '../../../config/index.json';

export function load() {
  console.log(config.frontpage);
  throw redirect(307, `/w/${config.frontpage}`);
}