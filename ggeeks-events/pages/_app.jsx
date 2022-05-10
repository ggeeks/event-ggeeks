import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <div>Logo</div>
      </nav>
    <Component {...pageProps} />
    </div>)
}

export default MyApp
