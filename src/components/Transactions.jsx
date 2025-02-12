import { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hook/useFetch";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const girUrl = useFetch({ keyword });
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl text-white"
    >
      <div className="w-full px-2 pt-6">
        <div className="text-base  flex flex-col">
          <a href="" target="_blank">
            Form: {shortenAddress(addressFrom)}
          </a>
          <a href="" target="_blank">
            To: {shortenAddress(addressTo)}
          </a>
          <p>Amount: {amount} ETH</p>
        </div>

        <div className="flex flex-col items-center ">
          <img
            src={girUrl || url}
            alt=""
            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover mt-2"
          />
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-2 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="w-full flex justify-center items-center gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-3xl text-white text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-3xl text-white text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap w-full justify-center items-center">
          {[...dummyData, ...transactions].reverse().map((item, index) => {
            return <TransactionsCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
