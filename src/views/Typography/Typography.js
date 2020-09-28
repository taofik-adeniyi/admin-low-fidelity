import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import Accessibility from "@material-ui/icons/Accessibility";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Table from "components/Table/Table.js";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const usedStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function TypographyPage() {
  const classes = useStyles();

  const classed = usedStyles();

  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats>
            <h4 className={classes.cardCategory}>Total Merchants</h4>
            <h3 className={classes.cardTitle}>
              2500 
            </h3>
          </CardHeader>
          <CardFooter stats />
        </Card>
      </GridItem>
          
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats>
            <h4 className={classes.cardCategory}>Active Merchants</h4>
            <h3 className={classes.cardTitle}>
              500 
            </h3>
          </CardHeader>
          <CardFooter stats />
        </Card>
      </GridItem>
          
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats>
            <h4 className={classes.cardCategory}>Inactive Merchants</h4>
            <h3 className={classes.cardTitle}>
              25 
            </h3>
          </CardHeader>
          <CardFooter stats />
        </Card>
      </GridItem>
    </GridContainer>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4}>
        <h5>Merchant % Drop off</h5>
        <Card chart>
        <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
        </CardHeader>
        <CardBody>
          {/* <h4 className={classes.cardTitle}>9% Drop off</h4> */}
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 9%
            </span>{" "}
            Drop Off
          </p>
        </CardBody>
        {/* <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
          </div>
        </CardFooter> */}
      </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <h5>Total Revenue</h5>
        <Card chart>
        <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
        </CardHeader>
        <CardBody>
          {/* <h4 className={classes.cardTitle}>9% Drop off</h4> */}
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> $50,000
            </span>{" "}
            {/* Drop Off */}
          </p>
        </CardBody>
        {/* <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
          </div>
        </CardFooter> */}
      </Card>
      </Grid><Grid item xs={12} sm={12} md={4}>
        <h5>Total Deals</h5>
        <Card chart>
        <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
        </CardHeader>
        <CardBody>
          {/* <h4 className={classes.cardTitle}>9% Drop off</h4> */}
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 10,000 Deals
            </span>{" "}
            {/* Drop Off */}
          </p>
        </CardBody>
        {/* <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
          </div>
        </CardFooter> */}
      </Card>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <h5>Create Mall</h5>
            <Card>
              <form className={classed.root} noValidate autoComplete="off"> 
                <TextField 
                  required 
                  label="Required" 
                  id="standard-required"
                  placeholder="Create Mall"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Location"
                  type="text"
                  placeholder="Location"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Description"
                  type="text"
                  placeholder="Description"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Opening Hours"
                  type="time"
                />
                {/* <div style={{marginLeft: "10%", marginTop: "5px", marginBottom: "5px"}}>
                  <small>Office hours are 9am to 6pm</small>
                </div> */}
                <TextField
                  required
                  id="standard-required"
                  label="Closing Hours"
                  type="time"
                />
                {/* <div style={{marginLeft: "10%", marginTop: "5px", marginBottom: "5px"}}>
                  <small>Office hours are 9am to 6pm</small>
                </div> */}
                <div style={{marginLeft: "30%", marginTop: "10px", marginBottom: "10px"}}>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
                
              </form>
              {/* <CardHeader color="info" stats >
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>No of Pinned Deals</p>
                <h3 className={classes.cardTitle}>3000</h3>
              </CardHeader> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <h5>All Merchants</h5>
            {/* <Card chart> */}
            {/* <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader> */}
            {/* <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody> */}
            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter> */}
          {/* </Card> */}
          <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Recent Activities</h4>
              {/* <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p> */}
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Merchant ID", "Name", "Location", "Deals Created", "Deals Claimed", "Deals Expired", "Action"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Dakota Rice", "$36,738", "Niger"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Dakota Rice", "$36,738", "Niger"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South", "Dakota Rice", "$36,738", "Niger"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
          </Grid>
        </Grid>

    </div>
    // <Card>
    //   <CardHeader color="primary">
    //     <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
    //     <p className={classes.cardCategoryWhite}>
    //       Created using Roboto Font Family
    //     </p>
    //   </CardHeader>
    //   <CardBody>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 1</div>
    //       <h1>The Life of Material Dashboard</h1>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 2</div>
    //       <h2>The Life of Material Dashboard</h2>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 3</div>
    //       <h3>The Life of Material Dashboard</h3>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 4</div>
    //       <h4>The Life of Material Dashboard</h4>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 5</div>
    //       <h5>The Life of Material Dashboard</h5>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Header 6</div>
    //       <h6>The Life of Material Dashboard</h6>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Paragraph</div>
    //       <p>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers. I understand culture. I am
    //         the nucleus. I think that’s a responsibility that I have, to push
    //         possibilities, to show people, this is the level that things could
    //         be at.
    //       </p>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Quote</div>
    //       <Quote
    //         text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
    //         author=" Kanye West, Musician"
    //       />
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Muted Text</div>
    //       <Muted>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Muted>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Primary Text</div>
    //       <Primary>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Primary>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Info Text</div>
    //       <Info>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Info>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Success Text</div>
    //       <Success>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Success>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Warning Text</div>
    //       <Warning>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Warning>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Danger Text</div>
    //       <Danger>
    //         I will be the leader of a company that ends up being worth billions
    //         of dollars, because I got the answers...
    //       </Danger>
    //     </div>
    //     <div className={classes.typo}>
    //       <div className={classes.note}>Small Tag</div>
    //       <h2>
    //         Header with small subtitle
    //         <br />
    //         <small>
    //           Use {'"'}Small{'"'} tag for the headers
    //         </small>
    //       </h2>
    //     </div>
    //   </CardBody>
    // </Card>
  );
}
