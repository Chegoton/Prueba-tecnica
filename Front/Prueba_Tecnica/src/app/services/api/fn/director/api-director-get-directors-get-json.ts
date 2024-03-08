/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DirectorViewModel } from '../../models/director-view-model';

export interface ApiDirectorGetDirectorsGet$Json$Params {
}

export function apiDirectorGetDirectorsGet$Json(http: HttpClient, rootUrl: string, params?: ApiDirectorGetDirectorsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectorViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiDirectorGetDirectorsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DirectorViewModel>>;
    })
  );
}

apiDirectorGetDirectorsGet$Json.PATH = '/api/Director/GetDirectors';
