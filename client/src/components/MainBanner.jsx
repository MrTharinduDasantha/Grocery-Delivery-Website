import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        className="w-full hidden md:block"
        alt="Banner"
      />
      <img
        src={assets.main_banner_bg_sm}
        className="w-full md:hidden"
        alt="Banner"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-16 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-96 leading-tight lg:leading-14">
          Freshess You Can Trust, Savings You Will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop now
            <img
              src={assets.white_arrow_icon}
              className="md:hidden transition group-focus:translate-x-1"
              alt="Arrow"
            />
          </Link>
          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              className="transition group-focus:translate-x-1"
              alt="Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
