import { FormWrapper } from "../../components";

const ResetPassword = () => {
  return (
    <FormWrapper>
      <h2 className="text-primary font-medium text-2xl mb-5">
        Reset Your Password
      </h2>
      <p className="mb-5 text-sm text-primary">
        Enter your new password below.
      </p>
      <div className="mb-5">
        <label class="block text-gray-700 text-sm mb-2" for="password">
          New password
        </label>
        <input
          class="appearance-none bg-inputBG border border-grayBorder rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-10">
        <label class="block text-gray-700 text-sm mb-2" for="confirm-password">
          Confirm new password
        </label>
        <input
          class="appearance-none bg-inputBG border border-grayBorder rounded 
                w-full p-4 text-gray-700 leading-tight 
                focus:outline-blue focus:shadow-outline"
          id="confirm-password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <button
          class="bg-blue text-white py-3 px-14 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Reset
        </button>
      </div>
    </FormWrapper>
  );
};

export default ResetPassword;
