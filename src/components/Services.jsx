import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="w-full flex justify-center items-center gradient-bg-services">
      <div className="flex flex-col mf:flex-row  px-4 py-12 md:px-20 md:py-0 justify-center items-center">
        <div className="flex-1 flex flex-col items-start justify-start relative xl:left-20">
          <h1 className="text-3xl sm:text-5xl text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-white font-light mt-5 md:w-9/12 w-11/12">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl !rounded-2xl">
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-[#2952E3] `}
            >
              <BsShieldFillCheck fontSize={21} className="text-white" />
            </div>
            <div className="ml-5 flex flex-col flex-1">
              <h3 className="mt-2 text-white text-lg">Security gurantee</h3>
              <p className="mt-1 text-white text-sm md:w-9/12">
                Security is guranteed. We always maintain privacy and maintain
                the quality of our products
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl !rounded-2xl">
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-[#8945F8] `}
            >
              <BiSearchAlt fontSize={21} className="text-white" />
            </div>
            <div className="ml-5 flex flex-col flex-1">
              <h3 className="mt-2 text-white text-lg">Security gurantee</h3>
              <p className="mt-1 text-white text-sm md:w-9/12">
                Security is guranteed. We always maintain privacy and maintain
                the quality of our products
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl !rounded-2xl">
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-[#F84550] `}
            >
              <RiHeart2Fill fontSize={21} className="text-white" />
            </div>
            <div className="ml-5 flex flex-col flex-1">
              <h3 className="mt-2 text-white text-lg">Security gurantee</h3>
              <p className="mt-1 text-white text-sm md:w-9/12">
                Security is guranteed. We always maintain privacy and maintain
                the quality of our products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
