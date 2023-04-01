import { SessionProvider } from "next-auth/react";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { Provider } from "react-redux";
export const metadata: Metadata = {
  title: "Recruiters | Phenom People",
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
