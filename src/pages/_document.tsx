import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "~/app/store";
export default function Document() {
  console.log("2");
  return (
    <Html lang="en">
      <Head />
      <body>
        <Provider store={store}>
          {/* <Component {...pageProps} /> */}
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}
