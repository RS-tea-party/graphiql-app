import { http, HttpResponse } from 'msw';

const data = {
  kind: 'identitytoolkit#GetAccountInfoResponse',
  users: [
    {
      localId: 'RkSxTXX15FNP1IxzXtXU7M3YRnG2',
      email: 'test@domain.com',
      passwordHash: 'UkVEQUNURUQ=',
      emailVerified: false,
      passwordUpdatedAt: 1704388892655,
      providerUserInfo: [
        {
          providerId: 'password',
          federatedId: 'test@domain.com',
          email: 'test@domain.com',
          rawId: 'test@domain.com',
        },
      ],
      validSince: '1804388892',
      lastLoginAt: '1704388892655',
      createdAt: '1704388892655',
      lastRefreshAt: '2024-01-04T17:21:32.655Z',
    },
  ],
};

export const lookupSuccess = http.post(
  'https://identitytoolkit.googleapis.com/v1/accounts:lookup',
  () => {
    return HttpResponse.json({ data });
  }
);
