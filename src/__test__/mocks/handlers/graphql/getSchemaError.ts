import { http, HttpResponse } from 'msw';

export const getSchemaError = http.post('https://bad.endpoint.url/', () => {
  return HttpResponse.error();
});
