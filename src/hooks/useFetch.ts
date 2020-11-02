import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

/**
 *  Make a http request on the given URL.
 * @param url Server URL that will be used for the request.
 * @param dependencies If present, a async call to the URL will be made when the values in the list change.
 * @param config Axios config options.
 */
export function useFetch<T>(
  url: string,
  dependencies: React.DependencyList,
  config?: AxiosRequestConfig
): [boolean, AxiosResponse<T>, any] {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({} as AxiosResponse<T>);
  const [responseError, setResponseError] = useState(null);

  useEffect(() => {
    const fetchAsync = async () => {
      setLoading(true);
      try {
        const res = await axios.get<T>(url, config);
        setResponse(res);
      } catch (error) {
        setResponseError(error);
      }
      setLoading(false);
    };

    fetchAsync();
  }, dependencies);

  return [loading, response, responseError];
}
