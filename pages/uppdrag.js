import React from "react"
import { Grid, Typography, Paper } from "@material-ui/core"
import styles from "../styles/Home.module.css"

const uppdrag = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Uppdrag</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Favoriter</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Blommor</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">Fåglar</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6">ETC</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default uppdrag
