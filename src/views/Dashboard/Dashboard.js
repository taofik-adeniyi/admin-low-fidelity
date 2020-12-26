import React, { useState, useEffect, adminId} from "react";
import axios from "axios";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import Grid from '@material-ui/core/Grid';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [dealsNo, setDealsNo] = useState()
  const [noOfMerchants, setNoOfMerchants] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/deal`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'crossorigin': true,
        'crossdomain': true,
        'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`,
        'client_secret': `${process.env.REACT_APP_CLIENT_SECRET}`
      }
    })
      .then(res => {
        setLoading(false)
        setDealsNo(res.data.recordsFiltered)
        console.log(res.data.recordsFiltered)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/merchants`, {
       headers: {
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`,
        'client_secret': `${process.env.REACT_APP_CLIENT_SECRET}`
        }
     }
      )
      .then(response => {
        console.log('Getter' + response.data)
        setLoading(false)
        setNoOfMerchants(response.data.recordsFiltered)
      })
      .catch(error => {
        setLoading(false)
        console.log('Error Gotten' + error)
      })
  },[])

  const classes = useStyles();
  return (
    <div>
      {console.log('deal error ' + dealsNo)}
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Available Spotters</p>
              <h4 className={classes.cardTitle}>
                2500 
              </h4>
            </CardHeader>
            <CardFooter stats style={{color: 'gray'}}>
              Lorem ipsum dolor sit contectur
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Merchants Available</p>
              <h4 className={classes.cardTitle}>8715
                {/* {loading? '... loading ....' : noOfMerchants} */}
              </h4>
            </CardHeader>
            <CardFooter stats style={{color: 'gray'}}>
              Lorem ipsum dolor sit contectur
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Available Malls</p>
              <h4 className={classes.cardTitle}>2512</h4>
            </CardHeader>
            <CardFooter stats style={{color: 'gray'}}>
                Lorem ipsum dolor sit contectur
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Created Deals</p>
              <h4 className={classes.cardTitle}>
                {/* {loading ? '..loading deals Num' : dealsNo} */}
                4763
              </h4>
            </CardHeader>
            <CardFooter stats style={{color: 'gray'}}>
              Lorem ipsum dolor sit contectur
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
        <Grid container spacing={3} style={{marginTop: 70, marginBottom: 70}}>
          <Grid item xs={12} sm={12} md={3}>
            <h5>Activities</h5>
            <Card style={{marginBottom: 70}}>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>No of Pinned Deals</p>
                <h4 className={classes.cardTitle}>3000</h4>
              </CardHeader>
              <CardFooter stats style={{color: 'gray'}}>
              Lorem ipsum dolor sit contectur
            </CardFooter>
            </Card>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>No of Claimed Deals</p>
                <h4 className={classes.cardTitle}>3500</h4>
              </CardHeader>
              <CardFooter stats style={{color: 'gray'}}>
              Lorem ipsum dolor sit contectur
            </CardFooter>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <h5>Transactions</h5>
            <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <div style={{height: 90}}></div>
          </Card>
          </Grid>
        </Grid>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Recent Activities</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Deal No", "Date", "Merchant", "Deal Description", "Comment"]}
                tableData={[
                  {id: 1, title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "Llovely services"},
                  {id: 3, title: "Sage Rodriguez", merchantName: "$56,142", state: "Netherlands", description: "duh not bad pls try improve"},
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
