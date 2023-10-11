import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import MyUSDC from "./components/MyUSDC";
import Swap from "./components/Swap";
export const ROUTER02 = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
export const FACTORY = "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32";
export const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
export const WMATIC = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
// 1. Get projectId
const projectId = "0525c5b585040cf25b4c5274ba3e4fbf";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* 지갑연결하기 */}
      <div className="my-4 border-b-2 border-solid border-gray-500 w-1/2"></div>{" "}
      {/* 과정 사이 가로선 */}
      <h2 className="font-bold font-mono text-2xl"> 1. Wallet Connect</h2>
      <w3m-button />
      <MyUSDC />
      {/* MATIC 양 입력 , 받게 될 USDC 계산됨*/}
      <div className="my-4 border-b-2 border-solid border-gray-500 w-1/2"></div>{" "}
      {/* 과정 사이 가로선 */}
      {/* 스왑연동하기 */}
      <h2 className="font-bold font-mono text-2xl"> 2. Swap MATIC to USDC</h2>
      <Swap />
      {/* 유동성 공급/출금하기 */}
      <div className="my-4 border-b-2 border-solid border-gray-500 w-1/2"></div>{" "}
      {/* 과정 사이 가로선 */}
      <h2 className="font-bold font-mono text-2xl">
        3. Add Liquidity on MATIC-USDC POOL
      </h2>
      {/* <AddLiquidity /> */}
      <div className="my-4 border-b-2 border-solid border-gray-500 w-1/2"></div>{" "}
      {/* 과정 사이 가로선 */}
      <h2 className="font-bold font-mono text-2xl">
        4. Withdraw Liquidity on MATIC-USDC POOL
      </h2>
      {/* <WithdrawLiquidity /> */}
    </WagmiConfig>
  );
}
