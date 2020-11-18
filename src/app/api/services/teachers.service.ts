/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TeacherDto } from '../models/teacher-dto';

@Injectable({
  providedIn: 'root',
})
export class TeachersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation teachersGet
   */
  static readonly TeachersGetPath = '/Teachers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TeacherDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TeacherDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `teachersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersGet$Plain(params?: {

  }): Observable<Array<TeacherDto>> {

    return this.teachersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TeacherDto>>) => r.body as Array<TeacherDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TeacherDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TeacherDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `teachersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersGet$Json(params?: {

  }): Observable<Array<TeacherDto>> {

    return this.teachersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TeacherDto>>) => r.body as Array<TeacherDto>)
    );
  }

  /**
   * Path part for operation teachersPost
   */
  static readonly TeachersPostPath = '/Teachers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  teachersPost$Response(params?: {
      body?: TeacherDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersPostPath, 'post');
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
   * To access the full response (for headers, for example), `teachersPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  teachersPost(params?: {
      body?: TeacherDto
  }): Observable<void> {

    return this.teachersPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation teachersIdGet
   */
  static readonly TeachersIdGetPath = '/Teachers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<TeacherDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TeacherDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `teachersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdGet$Plain(params: {
    id: number;

  }): Observable<TeacherDto> {

    return this.teachersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TeacherDto>) => r.body as TeacherDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<TeacherDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TeacherDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `teachersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdGet$Json(params: {
    id: number;

  }): Observable<TeacherDto> {

    return this.teachersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TeacherDto>) => r.body as TeacherDto)
    );
  }

  /**
   * Path part for operation teachersIdPut
   */
  static readonly TeachersIdPutPath = '/Teachers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  teachersIdPut$Response(params: {
    id: number;
      body?: TeacherDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `teachersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  teachersIdPut(params: {
    id: number;
      body?: TeacherDto
  }): Observable<void> {

    return this.teachersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation teachersIdDelete
   */
  static readonly TeachersIdDeletePath = '/Teachers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `teachersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeachersService.TeachersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `teachersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  teachersIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.teachersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
