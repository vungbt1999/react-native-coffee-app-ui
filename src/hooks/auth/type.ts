export type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export type UserType = {
  username: string;
  phone: string;
  fullName: string
}

export type TokenInfoType = {
  accessToken: string;
  expire: string;
}