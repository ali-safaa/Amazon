import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Layouts from '../components/Layouts';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
