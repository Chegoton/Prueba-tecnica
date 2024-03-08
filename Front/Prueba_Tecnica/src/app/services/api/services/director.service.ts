/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDirectorAddDirectorPost } from '../fn/director/api-director-add-director-post';
import { ApiDirectorAddDirectorPost$Params } from '../fn/director/api-director-add-director-post';
import { apiDirectorGetDirectorsGet$Json } from '../fn/director/api-director-get-directors-get-json';
import { ApiDirectorGetDirectorsGet$Json$Params } from '../fn/director/api-director-get-directors-get-json';
import { apiDirectorGetDirectorsGet$Plain } from '../fn/director/api-director-get-directors-get-plain';
import { ApiDirectorGetDirectorsGet$Plain$Params } from '../fn/director/api-director-get-directors-get-plain';
import { apiDirectorRemoveDirectorDelete } from '../fn/director/api-director-remove-director-delete';
import { ApiDirectorRemoveDirectorDelete$Params } from '../fn/director/api-director-remove-director-delete';
import { apiDirectorUpdateDirectorPut } from '../fn/director/api-director-update-director-put';
import { ApiDirectorUpdateDirectorPut$Params } from '../fn/director/api-director-update-director-put';
import { DirectorViewModel } from '../models/director-view-model';

@Injectable({ providedIn: 'root' })
export class DirectorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDirectorGetDirectorsGet()` */
  static readonly ApiDirectorGetDirectorsGetPath = '/api/Director/GetDirectors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorGetDirectorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Plain$Response(params?: ApiDirectorGetDirectorsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectorViewModel>>> {
    return apiDirectorGetDirectorsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorGetDirectorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Plain(params?: ApiDirectorGetDirectorsGet$Plain$Params, context?: HttpContext): Observable<Array<DirectorViewModel>> {
    return this.apiDirectorGetDirectorsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DirectorViewModel>>): Array<DirectorViewModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorGetDirectorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Json$Response(params?: ApiDirectorGetDirectorsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectorViewModel>>> {
    return apiDirectorGetDirectorsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorGetDirectorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Json(params?: ApiDirectorGetDirectorsGet$Json$Params, context?: HttpContext): Observable<Array<DirectorViewModel>> {
    return this.apiDirectorGetDirectorsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DirectorViewModel>>): Array<DirectorViewModel> => r.body)
    );
  }

  /** Path part for operation `apiDirectorAddDirectorPost()` */
  static readonly ApiDirectorAddDirectorPostPath = '/api/Director/AddDirector';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorAddDirectorPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost$Response(params?: ApiDirectorAddDirectorPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDirectorAddDirectorPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorAddDirectorPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost(params?: ApiDirectorAddDirectorPost$Params, context?: HttpContext): Observable<void> {
    return this.apiDirectorAddDirectorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDirectorUpdateDirectorPut()` */
  static readonly ApiDirectorUpdateDirectorPutPath = '/api/Director/UpdateDirector';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorUpdateDirectorPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorUpdateDirectorPut$Response(params?: ApiDirectorUpdateDirectorPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDirectorUpdateDirectorPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorUpdateDirectorPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorUpdateDirectorPut(params?: ApiDirectorUpdateDirectorPut$Params, context?: HttpContext): Observable<void> {
    return this.apiDirectorUpdateDirectorPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDirectorRemoveDirectorDelete()` */
  static readonly ApiDirectorRemoveDirectorDeletePath = '/api/Director/RemoveDirector';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorRemoveDirectorDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorRemoveDirectorDelete$Response(params?: ApiDirectorRemoveDirectorDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDirectorRemoveDirectorDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorRemoveDirectorDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorRemoveDirectorDelete(params?: ApiDirectorRemoveDirectorDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDirectorRemoveDirectorDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
