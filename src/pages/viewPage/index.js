import { useEffect, useState, useRef } from "react";
import { Chart, CustomizedTables, GraphModal } from "../../components";
import { Grid, Button, Typography, Link } from "@mui/material";
import sampleData from "../../data/SampleData.json";
import PieChartConfigs from "./ChartConfigs";
import TableHeadings from "./TableData";

const ViewPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [chartRow, setChartRow] = useState([]);
  const tableRef = useRef(null);
  PieChartConfigs.series[0].data = chartRow;
  const [chartData, setChartData] = useState(PieChartConfigs);

  useEffect(() => {
    if (chartRow.length == 0) {
      fillterData();
    }
  }, []);

  const fillterData = () => {
    var filteredReasons = [];
    sampleData.forEach((item) => {
      if (filteredReasons.indexOf(item.reason) === -1) {
        if (item.reason != "") {
          filteredReasons.push(item.reason);
        }
      }
    });
    filteredReasons.map((filteredReason, ind) => {
      let index = ind + 1;
      chartRow.push({
        value: sampleData.filter(function (value) {
          return value.reason === filteredReason;
        }).length,

        name: "R" + index + " " + "(" + filteredReason + ")",
      });
    });
  };

  const scrollToTble = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid sm={12} md={8}>
        <Grid className="siteCount">
          <Typography variant="h6" gutterBottom>
            SITES COUNT
          </Typography>
          <Grid className="countWrapper">
            <Typography variant="h4" gutterBottom>
              {sampleData.length}
            </Typography>
            <Link className="link" onClick={() => scrollToTble(tableRef)}>
              View List
            </Link>
          </Grid>
        </Grid>
        <Grid className="chartWrapper">
          <Chart chartData={chartData} height={"550px"} width={"650px"} />
        </Grid>
      </Grid>
      <Grid item sm={12} md={4}>
        <Typography variant="h6">map</Typography>
      </Grid>
      <Grid item sm={12}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" gutterBottom>
            Total Sites {sampleData.length}
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            DOWNLOAD
          </Button>
        </Grid>
        <div ref={tableRef}>
          <CustomizedTables tableHeadings={TableHeadings} rows={sampleData} />
        </div>
      </Grid>

      <GraphModal handleClose={handleClose} open={open} />
    </Grid>
  );
};

export default ViewPage;
