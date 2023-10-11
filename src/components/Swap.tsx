import React, { useState } from "react";
import useReserve from "../hooks/useResrve";
import { USDC, WMATIC } from "../App";

export default function Swap() {
  const [isMatic, setIsMatic] = useState<boolean>(true);
  const { reserveIn, reserveOut } = useReserve(isMatic, USDC, WMATIC);
  return (
    <div>
      <div>Reserve In: {reserveIn.toString()}</div>
      <div>Reserve Out: {reserveOut.toString()}</div>
    </div>
  );
}
