import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../../styles/Uppdrag.module.css"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { useRouter } from "next/router"

const Uppdrag = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Typography variant="h2">{router.query.name}</Typography>
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
