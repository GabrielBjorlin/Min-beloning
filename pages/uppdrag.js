import React from "react"
import { Grid, Typography, Paper, Icon } from "@material-ui/core" 
import styles from "../styles/Uppdrag.module.css"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useRouter } from "next/router"
import { BLOMMOR} from "../src/utils/config"
import { style } from "@mui/system";
import { ArrowLeft } from "@mui/icons-material";


  




const uppdrag = () => {


  const router = useRouter()

const navigate = (alt) => {
  if(alt === BLOMMOR)
    router.push(BLOMMOR);
}

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
          <Paper className={styles.paper}  onClick={() => navigate(BLOMMOR)}>
            <LocalFloristIcon style={{fontSize: "50px", marginTop: "-10px", float: "left"}}/>
              <Typography variant="h6" style={{marginRight: "35px"}}>Blommor </Typography>
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
