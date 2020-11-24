import { ServerErrorResponse } from '../../../types/types';

/**
 * Format the error response from the axios async call
 * @param error Axios error object
 */
export function formatErrorMessage(error: any): ServerErrorResponse {
  const errorMsg = {} as ServerErrorResponse;

  if (error.response) {
    errorMsg.message = error.message;
    errorMsg.status = error.response.status;

    return errorMsg;
  }

  if (error.request) {
    errorMsg.message = error.message;
    errorMsg.status = error.request.status;

    return errorMsg;
  }

  errorMsg.message = 'Unknown Error';

  return errorMsg;
}
