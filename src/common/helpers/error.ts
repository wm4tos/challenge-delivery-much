import httpCodes from 'http-status-codes';

interface ErrorObject {
  status: number;
  message: string;
}

interface Error {
  (name?: string, message?: string): ErrorObject
}

export const error: Error = (name, message) => (name
  ? {
    status: httpCodes[name],
    message: message || httpCodes.getStatusText(httpCodes[name]),
  }
  : {
    status: httpCodes.INTERNAL_SERVER_ERROR,
    message: httpCodes.getStatusText(httpCodes.INTERNAL_SERVER_ERROR),
  });
