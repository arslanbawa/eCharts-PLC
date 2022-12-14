import { useState, useEffect } from "react";
import { Box, Modal, Typography, Grid } from "@mui/material";
import Chart from "../chart";
import sampleData from "../../data/SampleData.json";
import BarChartTotal from "./BarChartTotal";
import BarChartX from "./BarChartX";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GraphModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Power Infra EOL / Under-Sized as per Load-Shedding
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={5}>
              <BarChartX data={sampleData}/>
            </Grid>
            <Grid item sm={12} md={7}>
              <BarChartTotal data={sampleData}/>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
