import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"

const DagensUppdrag = () => {
  const router = useRouter()

  const navigate = () => {
    router.push("/dagens-uppdrag/uppdrag")
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">Dagens Uppdrag</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={navigate}>
            <Typography variant="h5">Ta kort på en svan</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default DagensUppdrag
