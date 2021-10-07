import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../styles/Home.module.css"

const historik = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Historik</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">....</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">....</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">....</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default historik
