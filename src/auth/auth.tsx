export class Auth {
  private username: string;
  private password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  async signUp(): Promise<void> {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
    };
    await fetch("http://localhost:3001/auth/signup", config);
  }

  signIn() {}
}
