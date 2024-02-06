const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[330px] sm:min-w-[330px] w-full rounded-[20px] shadow-3xl px-10 py-10">
      <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-2xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-base text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
