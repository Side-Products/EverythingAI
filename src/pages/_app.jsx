import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import * as ga from "@/lib/google-analytics";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { SEO } from "@/config/next-seo.config";
import ScrollToPageTop from "@/utils/ScrollToPageTop";
import Layout from "@/layout/Layout";
import { wrapper } from "@/redux/redux-store";
import StatusContextProvider from "@/store/StatusContextProvider";
import LoadingContextProvider from "@/store/LoadingContextProvider";
import AuthModalContextProvider from "@/store/AuthModalContextProvider";
import ToolContextProvider from "@/store/ToolContextProvider";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@/lib/apollo";

function App({ Component, pageProps, session, router }) {
  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-PT8VNFD');
					`,
        }}
      />

      <Script
        src="https://kit.fontawesome.com/8f4546bba1.js"
        crossOrigin="anonymous"
      ></Script>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></Script>

      <SessionProvider session={session}>
        <LoadingContextProvider>
          <AuthModalContextProvider>
            <ApolloProvider client={client}>
              <StatusContextProvider>
                <ToolContextProvider>
                  <Layout>
                    <ScrollToPageTop />
                    <DefaultSeo {...SEO} />
                    <Component {...pageProps} />
                  </Layout>
                </ToolContextProvider>
              </StatusContextProvider>
            </ApolloProvider>
          </AuthModalContextProvider>
        </LoadingContextProvider>
      </SessionProvider>
    </>
  );
}
export default wrapper.withRedux(App);
