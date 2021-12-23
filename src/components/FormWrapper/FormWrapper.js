const FormWrapper = ({ children }) => {
  return (
    <div className="flex w-full justify-center items-center mt-24">
      <div
        className="bg-white p-8 rounded-3xl w-[560px] 
    shadow-[0px_30px_36px_#557da526]"
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
