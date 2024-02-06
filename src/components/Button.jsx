const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border bg-coral-red rounded-full text-white border-coral-red font-montserrat">
      {label}
      <img src={iconURL} alt={label} className="r ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
