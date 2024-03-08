/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DirectorViewModel } from '../../models/director-view-model';

export interface ApiDirectorGetDirectorsGet$Plain$Params {
}

export function apiDirectorGetDirectorsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDirectorGetDirectorsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectorViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiDirectorGetDirectorsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DirectorViewModel>>;
    })
  );
}

apiDirectorGetDirectorsGet$Plain.PATH = '/api/Director/GetDirectors';
