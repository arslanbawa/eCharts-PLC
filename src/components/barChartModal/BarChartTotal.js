import { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Chart from "../chart";
import { BarChartTotalConfigs } from "./ChartConfigs";

export default function BarChartTotal({ data }) {
  const [sumIndividualNar, setSumIndNar] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [totalNars, setTotalNars] = useState();

  const [barChartData, setBarChartData] = useState(BarChartTotalConfigs);

  useEffect(() => {
    if (sumIndividualNar.length == 0) {
      fillterData();
      BarChartTotalConfigs.series[0].data = sumIndividualNar;
    }
  }, []);

  const fillterData = () => {
    let narArray = [];
    var totalNar = 0;
    data.forEach((item) => {
      let NAR = parseFloat(item.nar.slice(0, -1));
      totalNar += NAR;
      narArray.push({ performance: item.performance, nar: NAR });
    });
    setTotalNars(totalNar);

    var filteredPerformance = [];
    narArray.forEach((item) => {
      if (filteredPerformance.indexOf(item.performance) === -1) {
        if (item.performance != "") {
          filteredPerformance.push(item.performance);
        }
      }
    });
    filteredPerformance.map((item) => {
      let sumNar = 0;
      narArray.filter((N) => {
        if (N.performance === item) {
          sumNar += N.nar;
        }
      });
      sumIndividualNar.push(parseFloat((sumNar / totalNar) * 100).toFixed(1));
      newArray.push({ performance: item, nar: sumNar });
    });
  };

  return (
    <>
      <Grid md={12}>
        <Typography id="spring-modal-title" variant="h6" component="h2">
          Average nar: {totalNars}
        </Typography>
      </Grid>
      <Grid md={12} style={{ display: "flex", justifyContent: "center" }}>
        <Chart chartData={barChartData} height={"300px"} width={"800px"} />
      </Grid>
    </>
  );
}
