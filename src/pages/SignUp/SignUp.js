import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

import { FormWrapper, RadioInput } from "../../components";

const SignUp = () => {
  return (
    <FormWrapper>
      <h2 className="text-primary font-medium text-2xl mb-7">Signup</h2>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm mb-2 font-sans ">I’m a</p>
        <div className="flex gap-5">
          <RadioInput
            label="Recruiter"
            id="recruiter"
            Icon={UserIcon}
            name="user-type"
          />
          <RadioInput
            label="Candidate"
            id="candidate"
            Icon={UserGroupIcon}
            name="user-type"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm mb-2 font-sans"
          htmlFor="full-name"
        >
          Full name
        </label>
        <input
          className="appearance-none bg-gray-750/20 border border-gray-850 rounded 
            w-full p-4 text-gray-700 leading-tight 
            focus:outline-blue focus:shadow-outline"
          id="full-name"
          type="text"
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
          Email address
        </label>
        <input
          className="appearance-none bg-gray-750/20 border border-gray-850 rounded 
            w-full p-4 text-gray-700 leading-tight 
            focus:outline-blue focus:shadow-outline"
          id="email"
          type="email"
          placeholder="mail@email.com"
          required
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="password"
          >
            Create Password
          </label>
          <input
            className="appearance-none bg-gray-750/20 border border-gray-850 rounded 
            w-full p-4 text-gray-700 leading-tight 
            focus:outline-blue focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="appearance-none bg-gray-750/20 border border-gray-850 rounded 
            w-full p-4 text-gray-700 leading-tight 
            focus:outline-blue focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="skills">
          Skills
        </label>
        <input
          className="appearance-none bg-gray-750/20 border border-gray-850 rounded 
            w-full p-4 text-gray-700 leading-tight 
            focus:outline-blue focus:shadow-outline"
          id="skills"
          type="text"
          placeholder="Enter comma separated skills"
          required
        />
      </div>
      <div className="flex justify-center mb-11">
        <button
          className="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Signup
        </button>
      </div>
      <p className="text-center">
        Have an account?{" "}
        <a
          href="#"
          className="inline-block align-baseline font-medium text-blue"
        >
          Login
        </a>
      </p>
    </FormWrapper>
  );
};

export default SignUp;
