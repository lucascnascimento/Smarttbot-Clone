import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';

/**
 * Returns a function to make http put calls, a loading state, a stateful response
 * and response error.
 */
export function usePut<T>(): [
  (url: string, body?: any, config?: AxiosRequestConfig) => Promise<void>,
  boolean,
  AxiosResponse<T>,
  any
] {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({} as AxiosResponse<T>);
  const [responseError, setResponseError] = useState(null);

  function init() {
    setLoading(false);
    setResponse({} as AxiosResponse<T>);
    setResponseError(null);
  }

  /**
   *
   * @param url Server URL that will be used for the request.
   * @param body Request body.
   * @param config Axios config options.
   */
  async function put(url: string, body?: any, config?: AxiosRequestConfig) {
    init();
    setLoading(true);
    try {
      const res = await axios.put<T>(url, body, config);
      setResponse(res);

      setLoading(true);
    } catch (error) {
      setResponseError(error);
    }
    setLoading(false);
  }

  return [put, loading, response, responseError];
}
