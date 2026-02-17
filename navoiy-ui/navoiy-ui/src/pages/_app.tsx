import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import React from 'react';
import { Header, Footer, Breadcrumbs } from '@navoiy-workspace/ui-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import '@styles/all-fonts.scss';

const TheaterApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <Breadcrumbs />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

TheaterApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};

export default TheaterApp;
