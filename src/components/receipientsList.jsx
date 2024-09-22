import { useState } from 'react';
import Web3 from 'web3';
import mchangoAbi from '../abis/mchangoAbi.js';

const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/UlKfKROuZsxm-R2dDcrkL8gXIfuA86il');
const contractAddress = '0xC706BAb70571C11e4C958eAE2E8854F1e6F37EF4'; 

export default function ReceipientsList() {
    const [userAddress, setUserAddress] = useState('');

    const handleContribute = async () => {
        if (!userAddress) {
            // Automatically connect to the user's wallet
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setUserAddress(accounts[0]);
                } catch (error) {
                    alert('Wallet connection failed. Please try again.');
                    return;
                }
            } else {
                alert('Please install MetaMask or another wallet provider.');
                return;
            }
        }

        const amountToSend = web3.utils.toWei('0.00001', 'ether'); // Convert to wei

        try {
            const transactionParameters = {
                to: '0xeB00BfF1e05E1eb33C29cF862130B67948d448c2', // The address to send the ETH to
                from: userAddress, // The address to send from
                value: amountToSend, // The amount in wei
            };

            await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            console.log('Transaction successful');
            alert('Contribution successful!');
        } catch (error) {
            console.error('Transaction error:', error);
            alert('Transaction failed. Please try again.');
        }
    };

    return (
        <section className="py-12">
            <header className="mb-6">
                <h3 className="font-semibold text-3xl text-[#00F0FF]">Receipients List</h3>
            </header>
            <table className="w-full overflow-hidden text-[.8em] sm:text-[1em]">
                <thead>
                    <tr className="text-left bg-[#345A5A] rounded-full">
                        <th className="uppercase rounded-l-xl p-2">Receipient Name</th>
                        <th className="uppercase p-2">Next Receiving Day</th>
                        <th className="uppercase p-2 rounded-r-xl">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Repeat the rows as needed */}
                    {/* Example row */}
                    <tr className="nunito ">
                        <td className="p-2 py-6">Adventure fund</td>
                        <td className="p-2 py-6">31st August, 2023.</td>
                        <td className="p-2 py-6 flex flex-wrap gap-1 items-center">
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 0.195312L0.5 6.85385L6.5 9.2319L12.5 6.85385L6.5 0.195312ZM0.5 7.64653L6.5 13.1953L12.5 7.64653L6.5 10.0246L0.5 7.64653Z" fill="white" />
                            </svg>
                            <span>13.6K ETH</span>
                        </td>
                    </tr>
                    {/* Add more rows as necessary */}
                </tbody>
            </table>
            <div className="bg-[#D1B9FF] mb-6 flex p-4 items-center gap-4 rounded-lg">
                {/* Your existing icon and content */}
                <button onClick={handleContribute} className="bg-[#A87BFF] text-white p-2 rounded">
                    Contribute for the week
                </button>
            </div>
        </section>
    );
}
