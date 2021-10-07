import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../../styles/Home.module.css"
import CameraAltIcon from "@mui/icons-material/CameraAlt"

const Uppdrag = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Ta kort på en svan</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <CameraAltIcon style={{ fontSize: "100px" }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Uppdrag
