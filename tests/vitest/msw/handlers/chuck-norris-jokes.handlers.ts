import { http, HttpResponse } from 'msw';

export const chuckNorrisJokesHandlers = [
  http.get('https://api.chucknorris.io/jokes/200', () => {
    return HttpResponse.json(
      {
        id: '200',
        value: 'Chuck Norris can divide by zero.',
      },
      {
        status: 200,
      },
    );
  }),
  http.post('https://api.chucknorris.io/jokes/201', () => {
    return HttpResponse.json(
      {
        id: '201',
        value: 'Chuck Norris can divide by zero.',
      },
      {
        status: 201,
      },
    );
  }),
  http.put('https://api.chucknorris.io/jokes/200', () => {
    return HttpResponse.json(
      {
        id: '200',
        value: 'Chuck Norris can divide by zero.',
      },
      {
        status: 200,
      },
    );
  }),
  http.patch('https://api.chucknorris.io/jokes/200', () => {
    return HttpResponse.json(
      {
        id: '200',
        value: 'Chuck Norris can divide by zero.',
      },
      {
        status: 200,
      },
    );
  }),
  http.delete('https://api.chucknorris.io/jokes/200', () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),
  http.get('https://api.chucknorris.io/jokes/400', () => {
    return HttpResponse.json(
      {
        statusCode: 400,
        message: ['400 is not a valid id'],
      },
      {
        status: 400,
        statusText: 'Bad Request',
      },
    );
  }),
  http.get('https://api.chucknorris.io/jokes/401', () => {
    return new HttpResponse(null, {
      status: 401,
      statusText: 'Unauthorized',
    });
  }),
  http.get('https://api.chucknorris.io/jokes/403', () => {
    return new HttpResponse(null, {
      status: 403,
      statusText: 'Forbidden',
    });
  }),
  http.get('https://api.chucknorris.io/jokes/404', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }),
  http.get('https://api.chucknorris.io/jokes/500', () => {
    return new HttpResponse(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }),
];
