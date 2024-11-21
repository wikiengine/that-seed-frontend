// typescript 싫어
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/public/v');
  const data = await response.json();

  const { engine, backend, frontend, skin } = data;

  return {
    engine_v: engine,
    back_v: backend,
    front_v: frontend,
    skin_v: skin,
  };
};
