import '../styles/globals.css'
import Routes from '../routes'
import NavigationBar from '../components/NavigationBar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Component {...pageProps} />
      </Routes>
    </>
  )
}