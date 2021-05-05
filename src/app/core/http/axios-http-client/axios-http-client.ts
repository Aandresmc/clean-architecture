import { injectable } from 'inversify';

import { HttpRequest, HttpResponse, HttpClient } from '../http-client'

import axios, { AxiosResponse } from 'axios'
@injectable()
export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      axiosResponse = error?.response || error?.message
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
