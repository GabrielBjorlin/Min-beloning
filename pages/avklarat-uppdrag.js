import { Typography } from "@material-ui/core"
import React from "react"
import styles from "../styles/Home.module.css"
import Image from "next/Image"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const AvklaratUppdrag = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h3">Avklarat uppdrag</Typography>
      <Typography variant="h5" style={{ marginBottom: "30px" }}>
        Plocka Blommor
      </Typography>
      <Image src="/images/flowers.jpg" height="411px" width="411px" />
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "green",
          borderRadius: "10px",
          padding: "3px",
        }}
      >
        <CheckCircleIcon
          style={{ display: "inline", color: "white", fontSize: "20px" }}
        />
        {"  "}
        <Typography variant="h5" style={{ display: "inline", color: "white" }}>
          Avklarad
        </Typography>
      </div>
    </div>
  )
}

export default AvklaratUppdrag
