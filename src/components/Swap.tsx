import React from "react";
import useReserve from "../hooks/useResrve";
import { USDC, WMATIC } from "../App";

export default function Swap() {
  const { reserve0, reserve1 } = useReserve(WMATIC, USDC);
  return <div>{(reserve0.toString(), reserve1.toString())}</div>;
}
