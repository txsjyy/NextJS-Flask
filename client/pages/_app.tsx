import "@/styles/globals.css";
import type { AppProps } from "next/app";
// pages/_app.tsx or components/Layout.tsx
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
