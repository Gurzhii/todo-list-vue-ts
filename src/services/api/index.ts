import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { Headers } from "./../../interfaces";

const defaultClientParams = {
  host: "http://localhost:3000",
  apiNamespace: "api",
  timeout: 5000
};

const defaultClientHeaders = {
  Pragma: "no-cache",
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache, no-store, must-revalidate"
};

export class Client {
  [key: string]: any;

  public constructor(
    options = defaultClientParams,
    headers: Headers = defaultClientHeaders
  ) {
    const baseURL = `${options.host}/${options.apiNamespace}`;

    this.api = axios.create({
      baseURL,
      headers,
      timeout: options.timeout,
      withCredentials: true
    });
  }

  public async request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.api.request(config);
  }

  public async get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.get(url, config);
  }

  public post<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.post(url, data, config);
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.delete(url, config);
  }

  public put<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.put(url, data, config);
  }

  public success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  public error(error: AxiosError<Error>): void {
    throw error;
  }
}
