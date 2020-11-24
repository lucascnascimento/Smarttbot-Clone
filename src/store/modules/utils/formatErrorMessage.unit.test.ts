import moxios from 'moxios';
import api from '../../../services/api';
import { ServerErrorResponse } from '../../../types/types';
import { formatErrorMessage } from './formatErrorMessage';

describe(`Format the error message raised by the axios async call`, () => {
  // Setup and teardown
  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  it(`should return the formatted response on a server response error`, async () => {
    // Mock the axios response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: 'Request failed with status code 500',
      });
    });

    // Set the expected formated response
    const expectedFormatedResponse = {
      message: 'Request failed with status code 500',
      status: 500,
    } as ServerErrorResponse;

    // Simulate an failed axios async call and validate the error
    try {
      await api.get('/robot');
    } catch (error) {
      expect(formatErrorMessage(error)).toEqual(expectedFormatedResponse);
    }
  });

  it(`should return the formatted response on a client request error`, async () => {
    // Mock the axios response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400 });
    });

    // Set the expected formated response
    const expectedFormatedResponse = {
      message: 'Request failed with status code 400',
      status: 400,
    } as ServerErrorResponse;

    // Simulate an failed axios async call and validate the error
    try {
      await api.get('/robot');
    } catch (error) {
      expect(formatErrorMessage(error)).toEqual(expectedFormatedResponse);
    }
  });
});
