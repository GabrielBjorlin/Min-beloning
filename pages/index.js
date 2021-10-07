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
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        <Grid item xs={6}>
          <Paper className={styles.paper} onClick={() => navigate(BELONINGAR)}>
            <Typography variant="h6">Mina Belöningar</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.paper} onClick={() => navigate(HISTORIK)}>
            <Typography variant="h6">Min</Typography>
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
      </Grid>
    </div>
  )
}
