import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('url', () => {
    return HttpResponse.json({ data: '' });
  }),
];
