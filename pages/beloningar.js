import { Grid, Typography, Paper } from "@material-ui/core"
import React from "react"
import styles from "../styles/beloningar.module.css"
import StarIcon from '@mui/icons-material/Star';

const beloningar = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">Belöningar</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6" style={{display: 'inline'}}>Biobiljett 100</Typography><StarIcon style={{fontSize: "17px"}} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6" style={{display: 'inline'}}>Utflykt 50</Typography><StarIcon style={{fontSize: "17px"}} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Typography variant="h6" style={{display: 'inline'}}>Exempel 10</Typography><StarIcon style={{fontSize: "17px"}} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default beloningar
