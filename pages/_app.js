import "../styles/globals.css"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "@material-ui/core"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link href="/">
          <HomeIcon style={{ fontSize: "40px" }} />
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
