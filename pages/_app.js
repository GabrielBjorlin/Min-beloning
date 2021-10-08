import "../styles/globals.css"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "@material-ui/core"
import { SnackbarProvider } from "notistack"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link href="/">
          <HomeIcon style={{ fontSize: "40px", color: "black" }} />
        </Link>
      </div>
      <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )
}

export default MyApp
