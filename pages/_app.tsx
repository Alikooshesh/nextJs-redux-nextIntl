import '../styles/globals.css'
import {NextIntlProvider} from 'next-intl';
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store , persistore} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <NextIntlProvider messages={pageProps.messages}>
              <Provider store={store}>
                  <PersistGate persistor={persistore}>
                      <Component {...pageProps} />
                  </PersistGate>
              </Provider>
          </NextIntlProvider>
      </>
  )
}

export default MyApp
