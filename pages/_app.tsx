import "../styles/global.css";
import "awsm.css/dist/awsm.min.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
