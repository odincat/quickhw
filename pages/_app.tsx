import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Content, Footer, Header, PageContainer } from '@comp/structure';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PageContainer>
    <Header />
    
    <Content>
    <Component {...pageProps} />
    </Content>

    <Footer />
    </PageContainer>
  );
}

export default MyApp;
