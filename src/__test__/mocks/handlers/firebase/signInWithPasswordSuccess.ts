import { http, HttpResponse } from 'msw';

const r = {
  kind: 'identitytoolkit#VerifyPasswordResponse',
  localId: 'MNiROXySiya6Umpb9ABGiun1O1v1',
  email: 'user12345@domain.com',
  displayName: 'A',
  idToken:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ncmFwaGlxbC1hcHAtY2M3NzYiLCJhdWQiOiJncmFwaGlxbC1hcHAtY2M3NzYiLCJhdXRoX3RpbWUiOjE3MDQzODgyMTAsInVzZXJfaWQiOiJNTmlST1h5U2l5YTZVbXBiOUFCR2l1bjFPMXYxIiwic3ViIjoiTU5pUk9YeVNpeWE2VW1wYjlBQkdpdW4xTzF2MSIsImlhdCI6MTcwNDM4ODIxMCwiZXhwIjoxNzA0MzkxODEwLCJlbWFpbCI6InVzZXIxMjM0NUBkb21haW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXIxMjM0NUBkb21haW4uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gqDiUY8fwmqeLKJyskwC_RKEycAnQoooJmWTBFcn1Iqv530oEcvLwwqY5fYKgSBYAGN-lCaAbesISLZuKEY9KlkB0CKdW8ZxNVvQNbAAEQO3_xL5l8kN6DaUCS72u9Tsr6o206CDJVmsCvbl64yqIwtn4bEW1fcPK5f5dPBJBGLzI1nyoer60HkyUJ5T3hfdSSRLUglWTH4wA-adhVGKokCUNVz8qO5Mqej_TqnN5pWZcMGW7zKOnudch2VLNyMgftIoTsw_xEdcAfDEZ1dPyyf0pAA7zxWlJEiLu9bXNoB787tb4ulrCDFvw82olMPHyRhp6XuoW8_ihwJpR5f5lw',
  registered: true,
  refreshToken:
    'AMf-vByFvnxKP0SEpyNsPfdE-rJLi0u6iUtDOTJ85_B9UkKTxGgE40DJxhxkKsvOdO1T4HRmkzfocz8L9lvzlwmrRiZfrVN1NTppLZJ29vdbh4VTdsQLQ_-4InVo9Fi4kUFMKCFcMW3r1NGpiKmG_jB4vpSHQKFA1Q11y5ykKKxQMHTCpoPglf5_j91gP0Ro5TYhX3Xp3e7mRdMce91nxIZrGjCyHHcynsoZ_AW7sh6BU-0I6HJ1dh4',
  expiresIn: '3600',
};

export const signInWithPasswordSuccess = http.post(
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
  () => {
    return HttpResponse.json({ data: r });
  }
);