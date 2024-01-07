import { http, HttpResponse } from 'msw';

const data = {
  kind: 'identitytoolkit#SetAccountInfoResponse',
  localId: 'RkSxTXX15FNP1IxzXtXU7M3YRnG2',
  email: 'test@domain.com',
  displayName: 'TestName',
  providerUserInfo: [
    {
      providerId: 'password',
      displayName: 'TestName',
      federatedId: 'test@domain.com',
      email: 'test@domain.com',
      rawId: 'test@domain.com',
    },
  ],
  passwordHash: 'UkVEQUNURUQ=',
  emailVerified: false,
};

export const updateSuccess = http.post(
  'https://identitytoolkit.googleapis.com/v1/accounts:update',
  () => {
    return HttpResponse.json({ data });
  }
);
