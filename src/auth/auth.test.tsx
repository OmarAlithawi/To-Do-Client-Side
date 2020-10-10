import React from "react";
import { Auth } from "./auth";
import { mount, shallow } from "enzyme";
import Signup from "../pages/Signup";
import { FunctionComponent } from "react";

jest.mock("./auth");

describe("Sign up component <Signup />", () => {
  describe("Sign up method", () => {
    it("Expected to return a user if success", async () => {
      const mockSignUp = jest.fn();
      Auth.prototype.signUp = mockSignUp;
      mockSignUp.mockReturnValue(Promise.resolve());
      const wrapper: any = shallow(<Signup />);
      wrapper.find('button[type="submit"]').simulate("submit");
      expect(mockSignUp).toHaveBeenCalled();
    });
  });
});
