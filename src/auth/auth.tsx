export class Auth {
  private username: string;
  private password: string;
  private history: any;
  constructor(username: string, password: string, history: any) {
    this.username = username;
    this.password = password;
    this.history = history;
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
    try {
      await fetch("http://localhost:3001/auth/signup", config);
      this.history.push("/signin");
    } catch (e) {
      console.log(e);
    }
  }

  async signIn() {
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

    try {
      const response = await fetch("http://localhost:3001/auth/signin", config);
      const userInfo = await response.json();
      const jwtToken = await userInfo.access_token;

      localStorage.setItem(
        "login",
        JSON.stringify({
          access_token: jwtToken,
          login: true,
          username: userInfo.name,
        })
      );
      this.history.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  async signOut() {
    localStorage.clear();
    this.history.push("/signin");
  }
}
