import '@/styles/globals.css';
import '../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Poppins } from 'next/font/google';
import clsx from 'clsx';
import nProgress from 'nprogress';
import router from 'next/router';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext']
});

export default function App({ Component, pageProps }: AppProps) {
  router.events.on('routeChangeStart', () => nProgress.start());
  router.events.on('routeChangeComplete', () => nProgress.done());
  router.events.on('routeChangeError', () => nProgress.done());

  return (
    <RecoilRoot>
      <main className={clsx(poppins.className, 'bg-nav-pattern bg-no-repeat')}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
