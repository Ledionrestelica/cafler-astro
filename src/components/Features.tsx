import check from "../assets/icons/check.svg";

const Features = () => {
  return (
    <div className="hidden bg-[var(--color-blue-500)] md:block w-full py-[10px] text-white px-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            className=""
            src={check.src}
            alt="check"
            width={22}
            height={22}
          />
          <p className="uppercase extrabold text-[16px]">
            Free shipping for orders $15
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            className=""
            src={check.src}
            alt="check"
            width={22}
            height={22}
          />
          <p className="uppercase extrabold text-[16px]">
            30 day money back guarantee
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            className=""
            src={check.src}
            alt="check"
            width={22}
            height={22}
          />
          <p className="uppercase extrabold text-[16px]">Premium quality</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
