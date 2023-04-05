import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
