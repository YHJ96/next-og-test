import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>The Rock</title>
        <meta name="description" content="The Rock Description" />

        {/* <meta
          property="og:url"
          content="https://next-og-test-rosy.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Rock" />
        <meta
          property="og:description"
          content={`The Rock Description 
        The Rock Description
        The Rock Description`}
        /> */}
        <meta
          property="og:image"
          content="https://yaimg.yanolja.com/v5/2023/10/18/14/640/652fe6bfe3b9e4.23846689.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
