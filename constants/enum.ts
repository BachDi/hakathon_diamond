// eslint-disable-next-line no-shadow
export enum ELocalStorageKeys {
  ACCESS_TOKEN = 'userToken'
}

// eslint-disable-next-line no-shadow
export enum EServerErrorMessage {
  PASSWORD_MINIMUM_LENGTH_REQUIRED = 'should NOT be shorter than 8 characters',
  PASSWORD_INVALID = 'password is not valid',
  JWT_EXPIRED = 'Error verifying token : jwt expired',
  UNAVAILABLE_USER = 'Error verifying token : unavailable user.'
}

export enum HomeStateEnum {
  LOG_IN = 'log-in',
  CREATE_ACCOUNT = 'create-account',
  SUCCESS = 'success'
}

export enum MainStateEnum {
  INSUFFICIENT = 'insufficient',
  AVAILABLE = 'available'
}
