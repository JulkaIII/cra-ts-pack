import React from "react";
import { TSayHelloProps } from "../types/index";

export const SayHello = ({ name }: TSayHelloProps) => {
  return <div>Hey {name}, say hello to TypeScript.</div>;
};
