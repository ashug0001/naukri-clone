import { FormWrapper } from "../../components";

const Login = () => {
  return (
    <FormWrapper>
      <h2 className="text-primary font-medium text-2xl mb-6">Login</h2>
      <div className="mb-4">
        <label class="block text-gray-700 text-sm mb-2" for="email">
          Email address
        </label>
        <input
          class="appearance-none bg-gray-750/20 border border-gray-850 rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email address"
        />
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <label class=" text-gray-700 text-sm mb-2" for="password">
            Password
          </label>
          <a
            class="inline-block align-baseline font-medium 
                    text-sm text-blue hover:text-blue-800"
            href="#"
          >
            Forgot your password?
          </a>
        </div>
        <input
          class="appearance-none bg-gray-750/20 border border-gray-850 rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div className="flex justify-center mb-14">
        <button
          class="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        New to MyJobs?{" "}
        <a href="#" class="inline-block align-baseline font-medium text-blue">
          Create an account
        </a>
      </p>
    </FormWrapper>
  );
};

export default Login;
