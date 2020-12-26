import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";
import Table from "components/Table/Table.js";
import AButton from '@material-ui/core/Button';

import avatar from "assets/img/faces/marc.jpg";

const styles = {
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

export default function Transactions() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats>
                <h4 className={classes.cardCategory}>Successful Transactions</h4>
                <h3 className={classes.cardTitle}>
                  2500 
                </h3>
              </CardHeader>
              <CardFooter stats>
                Lorem ipsum dolor sit contectur
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats>
                <h4 className={classes.cardCategory}>Pending Transactions</h4>
                <h3 className={classes.cardTitle}>
                  500 
                </h3>
              </CardHeader>
              <CardFooter stats>
                Lorem ipsum dolor sit contectur
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats>
                <h4 className={classes.cardCategory}>Failed Transactions</h4>
                <h3 className={classes.cardTitle}>
                  250 
                </h3>
              </CardHeader>
              <CardFooter stats>
                Lorem ipsum dolor sit contectur
              </CardFooter>
            </Card>
          </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Transactions History</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Order Code", "Item", "Description", "Pinned Amount", "Balance", "Expiry Date", "Action"]}
                tableData={[
                  {id: "1", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", history: true},
                  {id: "2", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", history: true},
                  {id: "3", title: "Dakota Rice", merchantName: "$36,738", state: "Niger", description: "$36,738", dealer: "Niger", history: true}
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
