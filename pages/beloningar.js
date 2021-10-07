import { Grid, Typography, Paper } from "@material-ui/core"
import React from "react"
import styles from "../styles/Home.module.css"

const beloningar = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Belöningar</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Biobiljett</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Utflykt</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Exempel 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default beloningar
