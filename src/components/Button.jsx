const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red  text-white border-coral-red"
      }
       font-montserrat  ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={label}
          className="r ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
