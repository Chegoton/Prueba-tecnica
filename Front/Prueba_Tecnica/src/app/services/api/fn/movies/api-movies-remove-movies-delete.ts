/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MoviesViewModel } from '../../models/movies-view-model';

export interface ApiMoviesRemoveMoviesDelete$Params {
      body?: MoviesViewModel
}

export function apiMoviesRemoveMoviesDelete(http: HttpClient, rootUrl: string, params?: ApiMoviesRemoveMoviesDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiMoviesRemoveMoviesDelete.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiMoviesRemoveMoviesDelete.PATH = '/api/Movies/RemoveMovies';
