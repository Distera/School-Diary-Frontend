/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SubjectDto } from '../models/subject-dto';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation subjectsGet
   */
  static readonly SubjectsGetPath = '/Subjects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<SubjectDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubjectDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsGet$Plain(params?: {

  }): Observable<Array<SubjectDto>> {

    return this.subjectsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDto>>) => r.body as Array<SubjectDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<SubjectDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubjectDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsGet$Json(params?: {

  }): Observable<Array<SubjectDto>> {

    return this.subjectsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubjectDto>>) => r.body as Array<SubjectDto>)
    );
  }

  /**
   * Path part for operation subjectsPost
   */
  static readonly SubjectsPostPath = '/Subjects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectsPost$Response(params?: {
      body?: SubjectDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectsPost(params?: {
      body?: SubjectDto
  }): Observable<void> {

    return this.subjectsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation subjectsIdGet
   */
  static readonly SubjectsIdGetPath = '/Subjects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<SubjectDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SubjectDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdGet$Plain(params: {
    id: number;

  }): Observable<SubjectDto> {

    return this.subjectsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubjectDto>) => r.body as SubjectDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<SubjectDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SubjectDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdGet$Json(params: {
    id: number;

  }): Observable<SubjectDto> {

    return this.subjectsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubjectDto>) => r.body as SubjectDto)
    );
  }

  /**
   * Path part for operation subjectsIdPut
   */
  static readonly SubjectsIdPutPath = '/Subjects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectsIdPut$Response(params: {
    id: number;
      body?: SubjectDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  subjectsIdPut(params: {
    id: number;
      body?: SubjectDto
  }): Observable<void> {

    return this.subjectsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation subjectsIdDelete
   */
  static readonly SubjectsIdDeletePath = '/Subjects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `subjectsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubjectsService.SubjectsIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `subjectsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  subjectsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.subjectsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
