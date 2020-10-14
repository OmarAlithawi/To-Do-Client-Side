import { ITodo } from "../interface/todo.interface";

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

  async getTodo(status: string): Promise<ITodo[]> {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://todolist-nestjs.herokuapp.com/todo?status=${status}`,
        config
      );
      let todoes = await response.json();
      if (todoes.length > 0) {
        todoes = todoes.reverse();
      }
      return todoes;
    } catch (e) {
      return e;
    }
  }

  async createTodo(description: string): Promise<void> {
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
      await fetch("https://todolist-nestjs.herokuapp.com/todo/", config);
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }

  async updateTodoStatus(
    id: number,
    status: string,
    description: string
  ): Promise<void> {
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
    try {
      await fetch(`https://todolist-nestjs.herokuapp.com/todo/${id}`, config);
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }

  async updateTodoDescription(
    id: number,
    status: string,
    description: string
  ): Promise<void> {
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
    try {
      await fetch(`https://todolist-nestjs.herokuapp.com/todo/${id}`, config);
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }

  async deleteTodo(id: number): Promise<void> {
    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
    };

    try {
      await fetch(`https://todolist-nestjs.herokuapp.com/todo/${id}`, config);
      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      return e;
    }
  }
}
