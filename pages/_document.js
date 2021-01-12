import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Favicon for the "save to home screen" feature on iOS */}
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          {/* Favicons for browsers and Google search results */}
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          {/* Favicon for the "save to home screen" feature on Android */}
          <link href="/site.webmanifest" rel="manifest" />

          {/* Custom Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Oswald:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            maxWidth: "550px",
            margin: "auto",
            padding: 24,
            fontSize: 18
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
