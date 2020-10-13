export class Todo {
  private jwtToken: string;
  private rerenderAppComponentState: boolean;
  private rerenderAppComponentFunction: Function;
  constructor(
    jwtToken: string,
    rerenderAppComponentState: boolean,
    rerenderAppComponentFunction: Function
  ) {
    this.jwtToken = jwtToken;
    this.rerenderAppComponentState = rerenderAppComponentState;
    this.rerenderAppComponentFunction = rerenderAppComponentFunction;
  }

  async getTodo(status: string) {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:3001/todo?status=${status}`,
      config
    );
    let todoes = await response.json();
    if (todoes.length > 0) {
      todoes = todoes.reverse();
    }

    return todoes;
  }

  async createTodo(description: string) {
    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description: description,
      }),
    };
    try {
      await fetch("http://localhost:3001/todo/", config);

      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      console.log(e);
    }
  }

  async updateTodoStatus(id: number, status: string, description: string) {
    const config = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status,
        description,
      }),
    };

    await fetch(`http://localhost:3001/todo/${id}`, config);
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
  }

  async updateTodoDescription(id: number, status: string, description: string) {
    const config = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status,
        description,
      }),
    };

    await fetch(`http://localhost:3001/todo/${id}`, config);
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
  }

  async deleteTodo(id: number) {
    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
    };

    await fetch(`http://localhost:3001/todo/${id}`, config);
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
  }
}
