import { useState } from "react";
import { ethers } from "ethers";

const Wallet = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [connectionStatus, setConnectionStatus] = useState("Connect your wallet");

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                setConnectionStatus("Connected");

                // Connect to Alchemy Sepolia
                const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/UlKfKROuZsxm-R2dDcrkL8gXIfuA86il");
                const signer = provider.getSigner();
                console.log("Wallet connected:", accounts[0]);
            } catch (error) {
                console.error("User denied account access or error occurred:", error);
                setConnectionStatus("Failed to connect");
            }
        } else {
            console.error("Please install an Ethereum wallet like MetaMask.");
            setConnectionStatus("Wallet not detected");
        }
    };

    const renderGroupInfo = (label, value) => (
        <div className="group-info">
            <span>{label}:</span>
            <span>{value}</span>
        </div>
    );

    return (
        <>
            <section className="flex items-center justify-start flex-wrap gap-4 py-8 pt-4">
                <div className="msbox w-full sm:w-max p-8 pt-2 rounded-xl flex gap-2 flex-col">
                    <h2 className="font-bold text-3xl mb-[-12px]">Wallet</h2>
                    <p className="flex gap-2 items-center mb-4">
                        <span className="text-sm">{walletAddress ? walletAddress : connectionStatus}</span>
                        <span>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1432_1369)">
                                    <path d="M10 5.19678H5.5C4.94772 5.19678 4.5 5.64449 4.5 6.19678V10.6968C4.5 11.2491 4.94772 11.6968 5.5 11.6968H10C10.5523 11.6968 11 11.2491 11 10.6968V6.19678C11 5.64449 10.5523 5.19678 10 5.19678Z" stroke="#E8EFFB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1432_1369">
                                        <rect width="12" height="12" fill="white" transform="translate(0 0.696777)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </p>
                    <button
                        onClick={connectWallet}
                        className="mt-4 bg-[#096D80] text-white py-2 px-4 rounded-md">
                        {walletAddress ? "Connected" : "Connect Wallet"}
                    </button>
                </div>
                <div className="w-full sm:w-max">
                    <h2 className="font-bold px-4 rounded-tl-xl bg-[#096D80] text-3xl hidden sm:block module w-[60%]">Group Info</h2>
                    <div className="msbox w-full sm:w-max p-8 py-2 rounded-xl sm:rounded-b-xl sm:rounded-t-none sm:rounded-tr-xl flex flex-col sm:flex-row flex-wrap sm:items-center sm:gap-2">
                        {renderGroupInfo("Group Admin Address", "5000")}
                        {renderGroupInfo("Groups In Rotation", "250")}
                        {renderGroupInfo("Groups Yet To Be In Rotation", "500 Ether")}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wallet;
