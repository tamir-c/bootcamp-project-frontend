/*
Comments can be deleted, they are for learning purposes:

You should declare a component as a client-side component in one of the following situations:

when we use event listeners (eq: onClick, onChange) in our components
when we use hooks like useState(), useReducer(), useEffect(), or other custom hooks that are depending on the state or lifecycle hooks
when we use browser-only APIs (eq: window, document) or hooks that use these APIs
when you want to use localStorage in your components
some very particular cases for data fetching
*/
"use client";

// Import Components:
import {
  Logo,
  SignUpForm,
  Header,
  SocialButtons,
  TermsOfService,
} from "@/components";
import Link from "next/link";

// Import: Dependencies
import useForm from "@/utils/customHooks/useForm";
import validateForm from "@/utils/helpers/validateForm";

// THIS IS THE SIGN UP PAGE
const page = () => {
  // Custom hook called with initial state values
  const {
    formData,
    handleInputChange,
    handleWarningOnFocus,
    handleWarningOnBlur,
    warnings,
  } = useForm({
    name: "",
    password: "",
    email: "",
  });

  // Validate form
  const errors = validateForm(formData);
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("handleSignup");
  };

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg flex justify-center flex-1 m-10">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <Logo />
          <div className="mt-12 flex flex-col items-center">
            <Header title="Sign up in to Sky Travel!" />
            <div className="w-full flex-1 mt-8">
              <SocialButtons text />

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <SignUpForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleWarningOnFocus={handleWarningOnFocus}
                handleWarningOnBlur={handleWarningOnBlur}
                handleSubmit={handleSignup}
                errors={errors}
                warnings={warnings}
                signup
              />
            </div>
            <p className="mt-4 text-center">
              Already have an account?&nbsp;
              <Link href="/login">Login</Link>
            </p>
            <TermsOfService />
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default page;
