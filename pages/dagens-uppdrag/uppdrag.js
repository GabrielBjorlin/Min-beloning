import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import styles from "../../styles/Uppdrag.module.css"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"

const Uppdrag = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const click = () => {
    enqueueSnackbar("Uppdrag genomfört, bra jobbat!", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    })
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">{router.query.header}</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={click}>
            <CameraAltIcon style={{ fontSize: "100px" }} />
          </Paper>
        </Grid>
        <Typography style={{ marginTop: "30px" }} variant="body1">
          {router.query.description}
        </Typography>
      </Grid>
    </div>
  )
}

export default Uppdrag
