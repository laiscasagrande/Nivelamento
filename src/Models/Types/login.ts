export type UserProps = {
  login: string;
  password: string;
};

export type LoginProps = {
  returnUser: UserProps;
  token: string;
};
