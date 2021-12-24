const Radio = ({ label, Icon, id, checked, ...rest }) => {
  return (
    <div className="radio-input">
      <input
        className="hidden"
        type="radio"
        id={id}
        checked={checked}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`flex ${
          checked ? "bg-blue text-white border-none" : "bg-inputBG border"
        }  rounded px-4 py-3 border-grayBorder`}
      >
        {Icon && (
          <Icon
            className={`h-6 mr-3  ${checked ? "text-white" : "text-blue"}`}
          />
        )}{" "}
        {label}
      </label>
    </div>
  );
};

export default Radio;
