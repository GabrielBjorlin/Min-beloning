import { Grid, Paper, Typography } from "@material-ui/core"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"
import {
  BELONINGAR,
  UPPDRAG,
  DAGENUPPDRAG,
  HISTORIK,
} from "../src/utils/config"
import SettingsIcon from "@mui/icons-material/Settings"
import Image from "next/image"
import StarIcon from "@mui/icons-material/Star"

export default function Home() {
  const router = useRouter()

  const navigate = (alt) => {
    if (alt === BELONINGAR) router.push(BELONINGAR)
    else if (alt === UPPDRAG) router.push(UPPDRAG)
    else if (alt === DAGENUPPDRAG) router.push(DAGENUPPDRAG)
    else if (alt === HISTORIK) router.push(HISTORIK)
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">Min Belöning</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={6}>
          <Paper
            className={styles.paper}
            style={{ marginRight: "6px" }}
            onClick={() => navigate(BELONINGAR)}
          >
            <Typography variant="h6">Belöningar</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={styles.paper}
            style={{ marginLeft: "6px" }}
            onClick={() => navigate(HISTORIK)}
          >
            <Typography variant="h6">Historik</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            className={styles.paper}
            onClick={() => navigate(DAGENUPPDRAG)}
          >
            <Typography variant="h6">Dagens Uppdrag</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={() => navigate(UPPDRAG)}>
            <Typography variant="h6">Välj Själv</Typography>
          </Paper>
        </Grid>

        <div style={{ marginTop: "10px" }}>
          <Image src="/images/progress.png" height="52px" width="411px" />
        </div>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            style={{
              display: "inline",
              fontSize: "52px",
              fontWeight: "bold",
            }}
          >
            65
          </Typography>{" "}
          <StarIcon style={{ fontSize: "40px" }} />
        </Grid>

        <SettingsIcon style={{ fontSize: "60px", marginLeft: "10px" }} />
      </Grid>
    </div>
  )
}
