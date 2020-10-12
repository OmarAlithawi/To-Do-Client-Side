import { store } from "../index";
import { getTodoes } from "../redux/actions";

export class Todo {
  private  jwtToken: string
  private rerenderAppComponentState: boolean;
  private rerenderAppComponentFunction: Function;
  constructor( jwtToken: string, rerenderAppComponentState: boolean,
    rerenderAppComponentFunction: Function) {
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
    const todoes = await response.json();
    const reversedTodo = todoes.reverse()
    store.dispatch(getTodoes(reversedTodo));
  }


 async createTodo(description:string) {
    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description:description ,
      }),
    };
    try {
      await fetch("http://localhost:3001/todo/", config);

      this.rerenderAppComponentFunction(this.rerenderAppComponentState);
    } catch (e) {
      console.log(e);
    }
  }

  async updateTodoStatus(id:number , status:string ,description:string) {
    const config = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status,
        description
      }),
    };

    const response = await fetch(
      `http://localhost:3001/todo/${id}`,
      config
    );
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
  }

   async deleteTodo(id:number) {
    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
        "Content-type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:3001/todo/${id}`,
      config
    );
    this.rerenderAppComponentFunction(this.rerenderAppComponentState);
  }
}
