import { BearerToken } from "./BearerToken";

export class User {
  public email: string;
  public password: string;
  public bearerToken?: BearerToken

  constructor(
    email: string,
    password: string) {
    this.email = email;
    this.password = password;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
