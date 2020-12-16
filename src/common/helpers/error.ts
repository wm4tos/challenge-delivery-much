import httpCodes from 'http-status-codes';

interface ErrorObject {
  status: number;
  message: string;
}

interface Error {
  (name?: string, message?: string): ErrorObject
}

export const error: Error = (name, message) => {
  if (!name) {
    return {
      status: httpCodes.INTERNAL_SERVER_ERROR,
      message: httpCodes.getStatusText(httpCodes.INTERNAL_SERVER_ERROR),
    };
  }

  const formattedName = name.toUpperCase().replace(/\s/g, '_');

  return {
    status: httpCodes[formattedName],
    message: message || httpCodes.getStatusText(httpCodes[formattedName]),
  };
};
