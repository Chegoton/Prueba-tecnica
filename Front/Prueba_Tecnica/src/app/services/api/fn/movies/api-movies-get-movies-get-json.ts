/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MoviesViewModel } from '../../models/movies-view-model';

export interface ApiMoviesGetMoviesGet$Json$Params {
}

export function apiMoviesGetMoviesGet$Json(http: HttpClient, rootUrl: string, params?: ApiMoviesGetMoviesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MoviesViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiMoviesGetMoviesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MoviesViewModel>>;
    })
  );
}

apiMoviesGetMoviesGet$Json.PATH = '/api/Movies/GetMovies';
