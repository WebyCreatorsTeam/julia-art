export type UserType = {
  _id: string;
  userName: string;
  userEmail: string;
  userPassword: string;
};

export type State = {
  errors?: {
    userEmail?: string[];
    userPassword?: string[];
    confirmUserPassword?: string[];
    userName?: string[];
  };
  message?: string | null;
  success?: boolean | null;
};