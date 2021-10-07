import { Grid, Paper, Typography, Button } from "@material-ui/core"
import React from "react"
import styles from "../styles/Dagens-uppdrag.module.css"
import { useRouter } from "next/router"

let uppdrag = "Ta kort på en svan"

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
            <Typography variant="h5">{uppdrag}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">
             Slumpa nytt uppdrag
          </Button>
        </Grid>

      </Grid>

    </div>
  )
}

export default DagensUppdrag
