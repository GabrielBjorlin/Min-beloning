import { Grid, Paper, Typography, Button } from "@material-ui/core"
import React, { useState } from "react"
import styles from "../styles/Dagens-uppdrag.module.css"
import { useRouter } from "next/router"

let uppdrag = "Ta kort på en svan"

const activities = [
  "Ta kort på en svan",
  "Plocka blommor",
  "Spela basket",
  "Gå en promenad",
]

const DagensUppdrag = () => {
  const router = useRouter()

  const [currentIndex, setCurrentIndex] = useState(0)

  const newActivity = () => {
    if (activities.length - 1 === currentIndex) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  const navigate = () => {
    router.push({
      pathname: "/dagens-uppdrag/uppdrag",
      query: { name: activities[currentIndex] },
    })
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">Dagens Uppdrag</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={navigate}>
            <Typography variant="h5">{activities[currentIndex]}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={() => newActivity()} variant="contained">
            Slumpa nytt uppdrag
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default DagensUppdrag
