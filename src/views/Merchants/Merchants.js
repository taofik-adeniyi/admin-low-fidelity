import React, { useState, useEffect } from "react";
import axios from 'axios';
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

export default function Merchants() {
  const [merchants, setMerchants] = useState([])
  const [totalmerchants, setTotalMerchants] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/merchants`,
     {
       headers: {
        "Access-Control-Allow-Origin": "*",
        'crossorigin': true,
        'crossdomain': true,
        'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`,
        'client_secret': `${process.env.REACT_APP_CLIENT_SECRET}`
        }
     }
      )
      .then(response => {
        setMerchants(response.data.data)
        setTotalMerchants(response.data.recordsFiltered)
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  },[])
  


  const [formValues, setFormValues] = useState({
    image: "",
    label: "",
    merchants: [
      {
        "userId": "5f16c8d8dad183001b4104f7",
        "businessName": "test",
        "businessAddress": "test", 
        "businessCategory": "test", 
        "image": "image url"
      },
      {
        "userId": "5f12c8d8dad183001b4104f7",
        "businessName": "tes2t",
        "businessAddress": "te2st", 
        "businessCategory": "te2st", 
        "image": "ima2ge url"
      }
    ]
  })

  const handleChangeForm = name => event => {
    setFormValues({ ...formValues, [name]: event.target.value });
  };

  const submitMall = (e) => {
    e.preventDefault()
    if (formValues.label != "" && formValues.image != ""){
      // alert("submitted succesfully")
      axios.post(`${process.env.REACT_APP_BASE_URL}/mall`, formValues, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'crossorigin': true,
          'crossdomain': true,
          'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
          'client-id': `${process.env.REACT_APP_CLIENT_ID}`,
          'client_secret': `${process.env.REACT_APP_CLIENT_SECRET}`
        }
      })
      .then(response => {
        console.log(response.data)
        if(response.data){
          console.log(response.data)
          alert("submitted succesfully")
        }
      })
      .catch(error => {
        console.log('Error: ' + error)
      })
    }else{
      alert("empty")
    }
  }

  const classes = useStyles();

  const classed = usedStyles();

  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats>
            <h4 className={classes.cardCategory}>Total Merchants</h4>
            <h3 className={classes.cardTitle}>
              {totalmerchants} 98,345
            </h3>
          </CardHeader>
          <CardFooter stats >Total onboarded Merchants</CardFooter>
        </Card>
      </GridItem>
          
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats>
            <h4 className={classes.cardCategory}>Active Merchants</h4>
            <h3 className={classes.cardTitle}>
              50,710
            </h3>
          </CardHeader>
          <CardFooter stats >Total active Merchants</CardFooter>

        </Card>
      </GridItem>
          
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats>
            <h4 className={classes.cardCategory}>Inactive Merchants</h4>
            <h3 className={classes.cardTitle}>
              2,500,382 
            </h3>
          </CardHeader>
          <CardFooter stats >Total in-active Merchants</CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats>
            <h4 className={classes.cardCategory}>Merchants with Issues</h4>
            <h3 className={classes.cardTitle}>
              2,523 
            </h3>
          </CardHeader>
          <CardFooter stats >List of Merchants with issues</CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
    
    <Grid container spacing={3} style={{marginTop: 70, marginBottom: 70}}>
      <Grid item xs={12} sm={12} md={4}>
        <h5>Merchant % Drop off</h5>
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
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 9%
            </span>{" "}
            Drop off
          </p>
        </CardBody>
      </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <h5>Total Revenue</h5>
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
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 2%
            </span>{" "}
            Drop off
          </p>
        </CardBody>
      </Card>
      </Grid><Grid item xs={12} sm={12} md={4}>
        <h5>Total Deals</h5>
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
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 0.5%
            </span>{" "}
            Drop off
          </p>
        </CardBody>
      </Card>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={3}>
    </Grid>
    <Grid item xs={12} sm={12} md={3}>
    </Grid>
    <Grid item xs={12} sm={12} md={3}>
    </Grid>
    <Grid item xs={12} sm={12} md={3}>
      <div style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
        <p>Filter By Option</p>
        <form>
          <select>
            <option disabled value="">Pick Option</option>
            <option value="PENDING">Option 1</option>
            <option value="APPROVED">Option 2</option>
            <option value="DECLINED">Option 3</option>
          </select>
        </form>
      </div>
    </Grid>
    
    </Grid>
    <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <h5>Create Mall</h5>
            <Card>
              <form values={formValues} className={classed.root} onSubmit={submitMall}>
                <TextField 
                  required 
                  label="Mall Name" 
                  id="standard-required"
                  placeholder="Mall Name"
                  type="text"
                  value={formValues.label}
                  onChange={handleChangeForm('label')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Descriptions"
                  type="text"
                  placeholder="Image"
                  value={formValues.image}
                  onChange={handleChangeForm('image')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Images"
                  type="text"
                  placeholder="Image"
                  value={formValues.image}
                  onChange={handleChangeForm('image')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Images"
                  type="text"
                  placeholder="Image"
                  value={formValues.image}
                  onChange={handleChangeForm('image')}
                />
                <div style={{marginLeft: "30%", marginTop: "10px", marginBottom: "10px"}}>
                  <Button type="submit" variant="contained" color="info">
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <h5 style={{position: "absolute", marginLeft: "20px"}}>All Merchants</h5>
            <h5 style={{marginLeft: "75%"}}>Create Merchant</h5>
          <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Recent Activities</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Merchant ID", "Name", "Location", "Deals Created", "Deals Claimed", "Deals Expired", "Action"]}
                // tableData={merchants}
                tableData={[
                  {id: "1", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", action: true},
                  {id: "2", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", action: true},
                  {id: "3", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", action: true}
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
          </Grid>
        </Grid>
    </div>
  );
}
