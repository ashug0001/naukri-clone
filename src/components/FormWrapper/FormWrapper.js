const FormWrapper = ({ children, handleSubmit = () => null }) => {
  return (
    <div className="flex w-full justify-center items-center mt-24">
      <form
        className="bg-white p-8 rounded-3xl w-[560px] 
    shadow-[0px_30px_36px_#557da526]"
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default FormWrapper;
