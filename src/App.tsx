import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import MyUSDC from "./components/MyUSDC";
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
      {/* 지갑 연결하기 */}
      <w3m-button />
      {/* 나의 USDC */}
      <MyUSDC />
    </WagmiConfig>
  );
}
