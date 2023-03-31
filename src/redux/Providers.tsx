"use client";
import { store } from "./store";
import React from "react";
import { Provider } from "react-redux";
interface Props {
  children: React.ReactNode;
}
function Providers(props: Props) {
  return <Provider store={store}>{props.children}</Provider>;
}
export default Providers;
