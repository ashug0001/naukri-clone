import { FormWrapper } from "../../components";

const ForgotPassword = () => {
  return (
    <FormWrapper>
      <h2 className="text-primary font-medium text-2xl mb-5">
        Forgot your password?
      </h2>
      <p className="mb-5 text-sm text-primary">
        Enter the email associated with your account and we’ll send you
        instructions to reset your password.
      </p>
      <div className="mb-10">
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
      <div className="flex justify-center">
        <button
          class="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </FormWrapper>
  );
};

export default ForgotPassword;
