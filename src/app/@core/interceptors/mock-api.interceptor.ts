import {HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HOME_PAGE_DATA } from '../mocks/home-page.mock';


export const MockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET' && req.url.includes('/api/home')) {
    return of(
      new HttpResponse({
        status: 200,
        body: HOME_PAGE_DATA
      })
    ).pipe(delay(500)); 
  }

  return next(req);
};
