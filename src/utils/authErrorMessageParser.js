/* eslint-disable prettier/prettier */
export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid E-mail';

    case 'auth/email-already-exists':
      return 'E-mail Already Exists';

    case 'auth/user-not-found':
      return 'User not found';

    case 'auth/wrong-password':
      return 'Wrong Password';

    default:
      return errorCode;
  }
}
