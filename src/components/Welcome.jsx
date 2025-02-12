import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import Loader from "./Loader";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    setformData,
    sendTransaction,
    formData,
    handleChange,
    isLoading,
    setIsLoading,
  } = useContext(TransactionContext);

  const companyCommonStyles =
    "min-h-[70px] border border-gray-400 flex justify-center items-center p-4";

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="w-full flex justify-center items-center mf:-top-10 relative">
      <div className="p-4 py-12 flex flex-col items-center justify-center mf:flex-row md:p-20">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 relative mf:-top-5">
          <h1 className="text-gradient text-3xl py-1 text-white sm:text-5xl">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-white text-base font-light mt-5 w-11/12 text-left">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>

          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="flex justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="text-white font-light grid grid-cols-2 sm:grid-cols-3 w-full mt-10 text-sm">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={`${companyCommonStyles}`}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`${companyCommonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-start items-center flex-col mt-15 max-w-[520px]">
          {/* eth card */}
          <div className="eth-card w-full h-40  rounded-xl p-3 flex flex-col justify-between sm:w-72 it">
            <div className="flex justify-between ">
              <div className=" border-white border-2 rounded-full w-10 h-10 flex justify-center items-center ">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>

            <div>
              <p className="text-white text-sm font-light">
                {shortenAddress(currentAccount)}
              </p>
              <p className="text-white text-lg font-semibold mt-1">Ethereum</p>
            </div>
          </div>

          {/* input */}
          <div className="mt-5 w-full p-5 blue-glassmorphism rounded-xl sm:w-96">
            <input
              onChange={(e) => handleChange(e, "addressTo")}
              placeholder="Address To"
              type="text"
              name="addressTo"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism focus:border-blue-500 focus:border-1 focus:bg-gray-100"
            />

            <input
              onChange={(e) => handleChange(e, "amount")}
              placeholder="Amount (ETH)"
              type="number"
              name="amount"
              step="0.0001"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism focus:border-blue-500 focus:border-1 focus:bg-gray-100"
            />

            <input
              onChange={(e) => handleChange(e, "keyword")}
              placeholder="Keyword (Gif)"
              type="text"
              name="keyword"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent   text-white   text-sm white-glassmorphism focus:border-blue-500 focus:border-1 focus:bg-gray-100"
            />

            <input
              onChange={(e) => handleChange(e, "message")}
              placeholder="Enter Message"
              type="text"
              name="message"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent   text-white   text-sm white-glassmorphism focus:border-blue-500 focus:border-1 focus:bg-gray-100"
            />

            <div className="w-full mt-2 h-[1px] bg-gray-400" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                onClick={(e) => handleSubmit(e)}
                type="button"
                className="mt-4 w-full py-2 text-white border border-[#3d4f7c] bg-transparent cursor-pointer hover:bg-[#3d4f7c] rounded-full"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
