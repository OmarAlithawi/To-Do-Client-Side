import { useDispatch } from "react-redux";
import { store } from "../index";
import { getTodoes } from "../redux/actions";

export class Todo {
  constructor() {}

  async getTodo(status: string, jwtToken: string) {
    console.log(`status ${status} token ${jwtToken}`);
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:3001/todo?status=${status}`,
      config
    );
    const todoes = await response.json();
    console.log(todoes);
    store.dispatch(getTodoes(todoes));
  }

  getTodoById() {}
  createTodo() {}
  updateTodo() {}
  deleteTodo() {}
}
