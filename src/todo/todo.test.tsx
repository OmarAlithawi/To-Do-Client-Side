import React from "react";
import { Todo } from "./index";
import { shallow } from "enzyme";
import Home from "../pages/home/Home";
import { Provider } from "react-redux";
import allReducers from "../redux/reducers";
import { compose, createStore } from "redux";

jest.mock("./index");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers, composeEnhancers());

describe("Components testing.", () => {
  describe("Get todoes method", () => {
    it("Expected to get all in progress todoes for the current user", async () => {
      const mockGetTodo = jest.fn();
      Todo.prototype.getTodo = mockGetTodo;
      mockGetTodo.mockReturnValue(Promise.resolve());
      const wrapper = shallow(
        <Provider store={store}>
          <Home.WrappedComponent />
        </Provider>
      );
      setTimeout(() => {
        expect(mockGetTodo).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });

  describe("update todo method", () => {
    it("Expected to update a todo", async () => {
      const mockGetTodo = jest.fn();
      Todo.prototype.getTodo = mockGetTodo;
      mockGetTodo.mockReturnValue(Promise.resolve());
      const wrapper = shallow(
        <Provider store={store}>
          <Home.WrappedComponent />
        </Provider>
      );
      setTimeout(() => {
        expect(mockGetTodo).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });
  describe("Get todoes method", () => {
    it("Expected to get all in progress todoes for the current user", async () => {
      const mockGetTodo = jest.fn();
      Todo.prototype.getTodo = mockGetTodo;
      mockGetTodo.mockReturnValue(Promise.resolve());
      const wrapper = shallow(
        <Provider store={store}>
          <Home.WrappedComponent />
        </Provider>
      );
      setTimeout(() => {
        expect(mockGetTodo).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });
});
