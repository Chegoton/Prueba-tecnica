/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMoviesAddMoviesPost } from '../fn/movies/api-movies-add-movies-post';
import { ApiMoviesAddMoviesPost$Params } from '../fn/movies/api-movies-add-movies-post';
import { apiMoviesGetMoviesGet$Json } from '../fn/movies/api-movies-get-movies-get-json';
import { ApiMoviesGetMoviesGet$Json$Params } from '../fn/movies/api-movies-get-movies-get-json';
import { apiMoviesGetMoviesGet$Plain } from '../fn/movies/api-movies-get-movies-get-plain';
import { ApiMoviesGetMoviesGet$Plain$Params } from '../fn/movies/api-movies-get-movies-get-plain';
import { apiMoviesRemoveMoviesDelete } from '../fn/movies/api-movies-remove-movies-delete';
import { ApiMoviesRemoveMoviesDelete$Params } from '../fn/movies/api-movies-remove-movies-delete';
import { apiMoviesUpdateMoviesPut } from '../fn/movies/api-movies-update-movies-put';
import { ApiMoviesUpdateMoviesPut$Params } from '../fn/movies/api-movies-update-movies-put';
import { MoviesViewModel } from '../models/movies-view-model';

@Injectable({ providedIn: 'root' })
export class MoviesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMoviesGetMoviesGet()` */
  static readonly ApiMoviesGetMoviesGetPath = '/api/Movies/GetMovies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesGetMoviesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGetMoviesGet$Plain$Response(params?: ApiMoviesGetMoviesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MoviesViewModel>>> {
    return apiMoviesGetMoviesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMoviesGetMoviesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGetMoviesGet$Plain(params?: ApiMoviesGetMoviesGet$Plain$Params, context?: HttpContext): Observable<Array<MoviesViewModel>> {
    return this.apiMoviesGetMoviesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MoviesViewModel>>): Array<MoviesViewModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesGetMoviesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGetMoviesGet$Json$Response(params?: ApiMoviesGetMoviesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MoviesViewModel>>> {
    return apiMoviesGetMoviesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMoviesGetMoviesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGetMoviesGet$Json(params?: ApiMoviesGetMoviesGet$Json$Params, context?: HttpContext): Observable<Array<MoviesViewModel>> {
    return this.apiMoviesGetMoviesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MoviesViewModel>>): Array<MoviesViewModel> => r.body)
    );
  }

  /** Path part for operation `apiMoviesAddMoviesPost()` */
  static readonly ApiMoviesAddMoviesPostPath = '/api/Movies/AddMovies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesAddMoviesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesAddMoviesPost$Response(params?: ApiMoviesAddMoviesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMoviesAddMoviesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMoviesAddMoviesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesAddMoviesPost(params?: ApiMoviesAddMoviesPost$Params, context?: HttpContext): Observable<void> {
    return this.apiMoviesAddMoviesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMoviesUpdateMoviesPut()` */
  static readonly ApiMoviesUpdateMoviesPutPath = '/api/Movies/UpdateMovies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesUpdateMoviesPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesUpdateMoviesPut$Response(params?: ApiMoviesUpdateMoviesPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMoviesUpdateMoviesPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMoviesUpdateMoviesPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesUpdateMoviesPut(params?: ApiMoviesUpdateMoviesPut$Params, context?: HttpContext): Observable<void> {
    return this.apiMoviesUpdateMoviesPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMoviesRemoveMoviesDelete()` */
  static readonly ApiMoviesRemoveMoviesDeletePath = '/api/Movies/RemoveMovies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesRemoveMoviesDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesRemoveMoviesDelete$Response(params?: ApiMoviesRemoveMoviesDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMoviesRemoveMoviesDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMoviesRemoveMoviesDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMoviesRemoveMoviesDelete(params?: ApiMoviesRemoveMoviesDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiMoviesRemoveMoviesDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
