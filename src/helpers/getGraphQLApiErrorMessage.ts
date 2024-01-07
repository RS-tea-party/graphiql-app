import type { GetGraphQLApiErrorMessageFuncType } from '../dto/types';

export const getGraphQLApiErrorMessage: GetGraphQLApiErrorMessageFuncType = (
  spellingList,
  error
) => {
  let errorMsg = spellingList.graphiQLApiStatus.API_FETCH_ERROR;
  if ('status' in error) {
    switch (error.status) {
      case 301:
        errorMsg = spellingList.graphiQLApiStatus.TOO_MANY_REQUESTS;
        break;
      case 400:
        errorMsg = spellingList.graphiQLApiStatus.BAD_REQUEST;
        break;
      case 404:
        errorMsg = spellingList.graphiQLApiStatus.NOT_FOUND;
        break;
      case 405:
        errorMsg = spellingList.graphiQLApiStatus.BAD_METHOD;
        break;
      case 500:
        errorMsg = spellingList.graphiQLApiStatus.SERVER_ERROR;
        break;
      default:
        break;
    }
  }
  return errorMsg;
};
