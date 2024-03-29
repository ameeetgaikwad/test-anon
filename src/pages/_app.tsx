import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnonAadhaarProvider _useTestAadhaar={true}>
      <Component {...pageProps} />
    </AnonAadhaarProvider>
  );
}
