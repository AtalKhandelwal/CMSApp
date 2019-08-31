export interface User {
  uid: string;
  email: string;
  displayName: string;
  roles: Roles;
}

export interface Roles {
  subscriber?: boolean;
  admin?: boolean;

}
