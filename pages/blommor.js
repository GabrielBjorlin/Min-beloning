import { Grid, Paper, Typography, Button } from "@material-ui/core"
import React, { useState } from "react"
import styles from "../styles/Dagens-uppdrag.module.css"
import { useRouter } from "next/router"

let uppdrag = "Ta kort på en svan"

const activities = [
  {
    header: "Plocka blommor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    header: "Ta kort på en ros",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    header: "Ta kort på en solros",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
]

const Blommor = () => {
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
      <Typography variant="h2">Blommor</Typography>
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

export default Blommor
