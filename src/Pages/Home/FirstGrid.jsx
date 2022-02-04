import React from "react";
import { Grid, Box, Paper, Stack, Card, CardMedia, Link } from "@mui/material";

function FirstGrid() {
  const style = {
    zIndex: 1000000,
    position: "relative",
    background:
      "linear-gradient(180deg, rgba(234,237,237,0.2189250700280112) 40%, rgba(234,237,237,1) 70%)",
  };

  const h2Style = {
    color: "block",
    fontWeight: 800,
    fontSize: "21px",
    marginBottom: "20px",
  };

  const gridStyle = {
    padding: "25px",
  };

  return (
    <Box sx={{ flexGrow: 1 }} mt={-20} style={style}>
      <Grid container spacing={3} md="auto" justifyContent="center">
        <Grid item style={{maxWidth: "400px", minWidth: "290px", minHeight: "420px", height: "420px"}}>
          <Paper style={gridStyle} elevation={0}>
            <Stack>
              <h2 style={h2Style}>Gaming accessories</h2>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              style={{ marginBottom: "16px" }}
            >
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Headsets</p>
              </Card>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Keyboards</p>
              </Card>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              style={{ marginBottom: "20px" }}
            >
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Computer Mice</p>
              </Card>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Chairs</p>
              </Card>
            </Stack>
            <Link href="#" style={{ fontSize: "13px", color: "#007185" }}>
              See More
            </Link>
          </Paper>
        </Grid>
        <Grid item style={{maxWidth: "400px", minWidth: "290px", minHeight: "420px", height: "420px"}}>
          <Paper style={gridStyle} elevation={0}>
            <Stack>
              <h2 style={h2Style}>Gaming accessories</h2>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              style={{ marginBottom: "16px" }}
            >
              <Card elevation={0} style={{backgroundColor: "rgba(0,164,180,.05)"}}>
                <CardMedia
                  style={{ backgroundColor: "rgba(0,164,180,.05)" }}
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Headsets</p>
              </Card>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Keyboards</p>
              </Card>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              style={{ marginBottom: "20px" }}
            >
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Computer Mice</p>
              </Card>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg"
                  alt="green iguana"
                />
                <p style={{ fontSize: "12px" }}>Chairs</p>
              </Card>
            </Stack>
            <Link href="#" style={{ fontSize: "13px", color: "#007185" }}>
              See More
            </Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                alt="green iguana"
              />
            </Card>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3}>
            <h1>Heloooooooooo</h1>
            <h1>Heloooooooooo</h1>
            <h1>Heloooooooooo</h1>
            <h1>Heloooooooooo</h1>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstGrid;
