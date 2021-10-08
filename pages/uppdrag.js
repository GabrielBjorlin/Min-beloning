import React from "react"
import { Grid, Typography, Paper, Icon } from "@material-ui/core"
import styles from "../styles/Uppdrag.module.css"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import { useRouter } from "next/router"
import { BLOMMOR } from "../src/utils/config"
import { ArrowLeft } from "@mui/icons-material"
import Image from "next/image"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball"

const uppdrag = () => {
  const router = useRouter()

  const navigate = (alt) => {
    if (alt === BLOMMOR) router.push(BLOMMOR)
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">Kategorier</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <FavoriteIcon
              style={{ fontSize: "50px", marginTop: "-10px", float: "left" }}
            />
            <Typography style={{ marginRight: "35px" }} variant="h6">
              Favoriter
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={() => navigate(BLOMMOR)}>
            <LocalFloristIcon
              style={{ fontSize: "50px", marginTop: "-10px", float: "left" }}
            />
            <Typography variant="h6" style={{ marginRight: "35px" }}>
              Blommor{" "}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <div style={{ marginTop: "-10px", float: "left" }}>
              <Image src="/images/swan.png" width="50px" height="50px" />
            </div>
            <Typography
              variant="h6"
              style={{ display: "inline", marginRight: "45px" }}
            >
              Fåglar
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <SportsBasketballIcon
              style={{ fontSize: "50px", marginTop: "-10px", float: "left" }}
            />
            <Typography style={{ marginRight: "35px" }} variant="h6">
              Sport
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default uppdrag
