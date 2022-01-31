import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full scroll-smooth">
        <Head />
        <meta
          name="description"
          content="Sandals Church exists to be real with ourselves, God and others. Whether you're new to church, haven't been in a while, or are looking for a new place to call home, there is a place for you here.x"
        />
        <meta
          property="og:image"
          content="https://sandalschurch.com/wp-content/themes/sandalschurch/images/share_banner.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://sandalschurch.com/wp-content/themes/sandalschurch/images/global/fav.png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-touch-icon-ipad-retina-152x152.png"
        />
        <body className="relative flex min-h-screen flex-col">
          <Main className="flex-auto" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
