type SigninRequesttype = {
  email: string;
  username: string;
  fullname: string;
  password: string;
};

type RefreshResponseType = {
  accessToken: string;
};

type LoginRequestType = {
  username: string;
  password: string;
};

type LoginResponseType = {
  email: string;
  fullname: string;
  username: string;
  accessToken: string;
  refreshToken: string;
};

export type {
  LoginRequestType,
  LoginResponseType,
  SigninRequesttype,
  RefreshResponseType,
};
