import React from "react";
import { Auth } from "./auth";
import { mount, shallow } from "enzyme";
import Signup from "../pages/Signup";
import { FunctionComponent } from "react";
import Signin from "../pages/Signin";

jest.mock("./auth");

describe("Sign up component <Signup />", () => {
  describe("Sign up method", () => {
    it("Expected to return a user if success", async () => {
      const mockSignUp = jest.fn();
      Auth.prototype.signUp = mockSignUp;
      mockSignUp.mockReturnValue(Promise.resolve());
      const wrapper: any = shallow(<Signup />);
      wrapper.find("button").simulate("click");
      setTimeout(() => {
        expect(mockSignUp).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });
});

describe("Sign In component <Signuin />", () => {
  describe("Sign up method", () => {
    it("Expected to return a user if success", async () => {
      const mockSignUp = jest.fn();
      Auth.prototype.signUp = mockSignUp;
      mockSignUp.mockReturnValue(Promise.resolve());
      const wrapper: any = shallow(<Signin />);
      wrapper.find("button").simulate("click");
      setTimeout(() => {
        expect(mockSignUp).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });
});
