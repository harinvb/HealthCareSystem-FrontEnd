export class User {
  userid: number = 0;
  private _username!: string;
  private _password!: string;
  private _role: string = 'user';
  private _isLoggedIn: boolean = false;

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get role(): string {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  public get loggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set loggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
