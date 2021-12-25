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
          checked ? "bg-blue text-white border-none" : "bg-gray-750/20 border"
        }  rounded px-4 py-3 border-gray-850`}
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
