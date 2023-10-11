import React, { useState } from "react";
import useReserve from "../hooks/useResrve";
import { USDC, WMATIC } from "../App";
import { ethers } from "ethers";
const getAmountOut = (
  amountIn: bigint,
  reserveIn: bigint,
  reserveOut: bigint
) => {};
export default function Swap() {
  const [isMatic, setIsMatic] = useState<boolean>(true);
  const { reserveIn, reserveOut } = useReserve(isMatic, USDC, WMATIC);
  return (
    <div>
      <div>Reserve In: {ethers.formatUnits(reserveIn, 18)}</div>
      <div>Reserve Out: {ethers.formatUnits(reserveOut, 6)}</div>
    </div>
  );
}
