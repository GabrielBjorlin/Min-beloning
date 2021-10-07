import { Grid, Paper, Typography, Button } from "@material-ui/core"
import React, { useState } from "react"
import styles from "../styles/Dagens-uppdrag.module.css"
import { useRouter } from "next/router"

let uppdrag = "Ta kort på en svan"

const activities = [
  {
    header: "Ta kort på en svan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    header: "Plocka blommor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    header: "Spela basket",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    header: "Gå en promenad",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
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
      query: {
        header: activities[currentIndex].header,
        description: activities[currentIndex].description,
      },
    })
  }

  return (
    <div className={styles.container}>
      <Typography variant="h2">Dagens Uppdrag</Typography>
      <Grid container style={{ marginTop: "30px" }}>
        <Grid item xs={12}>
          <Paper className={styles.paper} onClick={navigate}>
            <Typography variant="h5">
              {activities[currentIndex].header}
            </Typography>
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
