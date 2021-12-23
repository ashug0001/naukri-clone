const ForgotPassword = () => {
  return (
    <div className="flex w-full justify-center items-center mt-24">
      <div
        className="bg-white p-8 rounded-3xl w-[560px] 
        shadow-[0px_30px_36px_#557da526]"
      >
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
            class="appearance-none bg-inputBG border border-grayBorder rounded 
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
      </div>
    </div>
  );
};

export default ForgotPassword;
