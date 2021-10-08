import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"
import { AVKLARATUPPDRAG } from "../src/utils/config"

const historik = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Typography variant="h2">Historik</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper
            className={styles.paper}
            onClick={() => router.push(AVKLARATUPPDRAG)}
          >
            <Typography variant="h6">Plocka blommor</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default historik
