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
        <meta name="description" content="" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtbtmmgxx/image/upload/v1639101147/large_dev_portfolio_dark_43823a7947.png"
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
