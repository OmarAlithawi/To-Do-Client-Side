import React from "react";
import { Auth } from "./auth";
import { shallow } from "enzyme";
import Signup from "../pages/signup/Signup";

import Signin from "../pages/signin/Signin";
import Home from "../pages/home/Home";

jest.mock("./auth");

describe("Components testing", () => {
  describe("Sign up method", () => {
    it("Expected the user to sign up if success", async () => {
      const mockSignUp = jest.fn();

      Auth.prototype.signUp = mockSignUp;
      mockSignUp.mockReturnValue(Promise.resolve());
      const wrapper = shallow(<Signup.WrappedComponent />);
      const form = wrapper.find(".signupBtn");
      form.simulate("click");
      wrapper.update();
      setTimeout(() => {
        expect(mockSignUp).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });

  describe("Sign in method", () => {
    it("Expected to return a user if success", async () => {
      const mockSignIn = jest.fn();
      Auth.prototype.signIn = mockSignIn;
      mockSignIn.mockReturnValue(Promise.resolve());
      const wrapper: any = shallow(<Signin.WrappedComponent />);
      wrapper.find(".signinBtn").simulate("click");
      setTimeout(() => {
        expect(mockSignIn).toHaveBeenCalledTimes(1);
      }, 0);
    });
  });

  //   describe("Sign out method", () => {
  //     it("Expected the user to signout if success", async () => {
  //       const mockSignout = jest.fn();
  //       Auth.prototype.signOut = mockSignout;
  //       mockSignout.mockReturnValue(Promise.resolve());
  //       const wrapper: any = shallow(<Home.WrappedComponent />);
  //       wrapper.find(".signoutBtn").simulate("click");
  //       setTimeout(() => {
  //         expect(mockSignout).toHaveBeenCalledTimes(1);
  //       }, 0);
  //     });
  //   });
});
