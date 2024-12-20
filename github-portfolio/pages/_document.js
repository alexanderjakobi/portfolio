import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
       {/* Font Awesome CDN hinzufügen */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
