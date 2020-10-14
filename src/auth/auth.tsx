export class Auth {
  private username: string;
  private password: string;
  private history: any;
  private rerenderAppComponentState: boolean;
  private rerenderAppComponentFunction: Function;

  constructor(
    username: string,
    password: string,
    history: any,
    rerenderAppComponentState: boolean,
    rerenderAppComponentFunction: Function
  ) {
    this.username = username;
    this.password = password;
    this.history = history;
    this.rerenderAppComponentState = rerenderAppComponentState;
    this.rerenderAppComponentFunction = rerenderAppComponentFunction;
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
      await fetch("https://todolist-nestjs.herokuapp.com/auth/signup", config);
      this.history.push("/signin");
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }

  async signIn(): Promise<void> {
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
      const response = await fetch(
        "https://todolist-nestjs.herokuapp.com/auth/signin",
        config
      );
      const userInfo = await response.json();
      const jwtToken = await userInfo.access_token;

      if (jwtToken) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            access_token: jwtToken,
            login: true,
            username: userInfo.name,
          })
        );
      }
      this.history.replace("/");
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }

  signOut(): void {
    localStorage.clear();
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    this.history.push("/signin");
  }
}
