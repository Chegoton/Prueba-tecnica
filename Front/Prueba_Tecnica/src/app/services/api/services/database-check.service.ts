/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { databaseCheckCheckconnectionGet } from '../fn/database-check/database-check-checkconnection-get';
import { DatabaseCheckCheckconnectionGet$Params } from '../fn/database-check/database-check-checkconnection-get';

@Injectable({ providedIn: 'root' })
export class DatabaseCheckService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `databaseCheckCheckconnectionGet()` */
  static readonly DatabaseCheckCheckconnectionGetPath = '/DatabaseCheck/checkconnection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `databaseCheckCheckconnectionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  databaseCheckCheckconnectionGet$Response(params?: DatabaseCheckCheckconnectionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return databaseCheckCheckconnectionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `databaseCheckCheckconnectionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  databaseCheckCheckconnectionGet(params?: DatabaseCheckCheckconnectionGet$Params, context?: HttpContext): Observable<void> {
    return this.databaseCheckCheckconnectionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
