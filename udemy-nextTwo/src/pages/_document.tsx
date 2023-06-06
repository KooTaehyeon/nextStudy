import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <>
        <Html lang='ko'>
          <Head />
          <body>
            <div id={'overlays'}>
              <Main />
              <NextScript />
            </div>
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
