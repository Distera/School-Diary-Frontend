/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { StudentDto } from '../models/student-dto';
import { StudentMinDto } from '../models/student-min-dto';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation studentsGet
   */
  static readonly StudentsGetPath = '/Students';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<StudentMinDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StudentMinDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `studentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsGet$Plain(params?: {

  }): Observable<Array<StudentMinDto>> {

    return this.studentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StudentMinDto>>) => r.body as Array<StudentMinDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<StudentMinDto>>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StudentMinDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `studentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsGet$Json(params?: {

  }): Observable<Array<StudentMinDto>> {

    return this.studentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StudentMinDto>>) => r.body as Array<StudentMinDto>)
    );
  }

  /**
   * Path part for operation studentsPost
   */
  static readonly StudentsPostPath = '/Students';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studentsPost$Response(params?: {
      body?: StudentDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsPostPath, 'post');
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
   * To access the full response (for headers, for example), `studentsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studentsPost(params?: {
      body?: StudentDto
  }): Observable<void> {

    return this.studentsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studentsIdGet
   */
  static readonly StudentsIdGetPath = '/Students/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<StudentDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `studentsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdGet$Plain(params: {
    id: number;

  }): Observable<StudentDto> {

    return this.studentsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<StudentDto>) => r.body as StudentDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<StudentDto>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StudentDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `studentsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdGet$Json(params: {
    id: number;

  }): Observable<StudentDto> {

    return this.studentsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<StudentDto>) => r.body as StudentDto)
    );
  }

  /**
   * Path part for operation studentsIdPut
   */
  static readonly StudentsIdPutPath = '/Students/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studentsIdPut$Response(params: {
    id: number;
      body?: StudentDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `studentsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  studentsIdPut(params: {
    id: number;
      body?: StudentDto
  }): Observable<void> {

    return this.studentsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation studentsIdDelete
   */
  static readonly StudentsIdDeletePath = '/Students/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `studentsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StudentsService.StudentsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `studentsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  studentsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.studentsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
