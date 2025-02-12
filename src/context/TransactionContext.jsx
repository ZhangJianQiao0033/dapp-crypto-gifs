import { createContext, useEffect, useState } from "react";
import { ethers, Contract, parseEther } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { formatDate } from "../utils/formater";

export const TransactionContext = createContext();
const { ethereum } = window;

const createEthereumContract = async () => {
  // const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const transactionsContract = new Contract(
    contractAddress,
    contractABI,
    signer
  );
  // console.log({
  //   contractAddress,
  //   contractABI,
  //   provider,
  //   signer,
  //   transactionsContract,
  // });
  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const contract = await createEthereumContract();
        const transactions = await contract.getAllTransactions();
        console.log("transactions", transactions[0].amount);

        const structuredTransactions = transactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          amount: Number(transaction.amount) / 1e18,
          timestamp: formatDate(transaction.timestamp),
          message: transaction.message,
          keyword: transaction.keyword,
        }));
        setTransactions(structuredTransactions);
        // console.log(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask.");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask.");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log(accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask.");
      }
      const { addressTo, amount, keyword, message } = formData;

      const transactionsContract = await createEthereumContract();
      const parsedAmount = parseEther(amount.toString());
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: addressTo,
        value: parseEther(amount.toString()),
      });
      setIsLoading(true);
      const receipt = await tx.wait();
      const transactionHash = await transactionsContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      await transactionHash.wait();

      setIsLoading(false);

      const transactionsCount1 =
        await transactionsContract.getTransactionCount();
      setTransactionCount(Number(transactionsCount1));
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists;
  }, [transactionCount]);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        isLoading,
        transactions,
        setIsLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
