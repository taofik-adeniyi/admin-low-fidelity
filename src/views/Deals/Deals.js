import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import Modal from "components/Modal/Modal";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Accessibility from "@material-ui/icons/Accessibility";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Deals() {
  const [loading, setLoading] = useState(true);
  const [dealsList, setDealsList] = useState([]);
  const [decline, setDecline] = useState(false);
  const [status, setStatus] = useState("DECLINED");
  const [dealsNo, setDealsNo] = useState();
  const [dealid, setDealid] = useState("");
  const [comment, setComment] = useState("");

  //Get All Deals and Display
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/deal`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          crossorigin: true,
          crossdomain: true,
          Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
          client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setDealsList(res.data.data);
        setDealsNo(res.data.recordsFiltered);
      })
      .catch((err) => {
        setLoading(false);
        setDealsList([]);
        console.log(err);
      });
  }, []);

  // Handle the approval of deals
  const handleApprove = (deals_id) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/deal/approve`,
        { id: deals_id },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            crossorigin: true,
            crossdomain: true,
            Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
            "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
            client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
          },
        }
      )
      .then((response) => {
        if (response.data) {
          alert(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  //Handles Decline Button
  const handleDecline = (deals_id) => {
    setDecline(true);
    setDealid(deals_id);
  };

  //Handles decline request and submission of comment and merchants
  const submitDeclineReason = (e) => {
    e.preventDefault();
    console.log(dealid + comment);

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/deal/decline`,
        { id: dealid, reason: comment },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            crossorigin: true,
            crossdomain: true,
            Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
            "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
            client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
          },
        }
      )
      .then((response) => {
        if (response.data) {
          alert("Checking ... " + dealid + " " + response.data.data);
        }
        setDecline(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (e) => {
    setStatus(status);
    console.log(status);
  };

  const dealsResult = dealsList.filter((result) => result.status === status);

  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Deals Created</p>
              <h4 className={classes.cardTitle}>
                {/* {loading? '..loading' : dealsNo}
                 */}
                2,345
              </h4>
            </CardHeader>
            <CardFooter stats>lorem ipsum dolor taofik</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Pinned Deals</p>
              <h4 className={classes.cardTitle}>5,027</h4>
            </CardHeader>
            <CardFooter stats>lorem ipsum dolor taofik</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Claimed Deals</p>
              <h4 className={classes.cardTitle}>2,501</h4>
            </CardHeader>
            <CardFooter stats>lorem ipsum dolor taofik</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>No of Expired Deals</p>
              <h4 className={classes.cardTitle}>5,000</h4>
            </CardHeader>
            <CardFooter stats>lorem ipsum dolor taofik</CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <Grid container spacing={3}>
        <GridItem item xs={12} sm={12} md={3}>
          <div style={{ paddingTop: 20, paddingLeft: 20 }}>
            List of Deals Created
          </div>
        </GridItem>
        <GridItem item xs={12} sm={12} md={3}></GridItem>
        <GridItem item xs={12} sm={12} md={3}></GridItem>
        <GridItem item xs={12} sm={12} md={3}>
          <p>Filter By Status</p>
          <form onSubmit={handleSubmit}>
            <select
              value={status}
              onChange={handleStatusChange}
              style={{ padding: "6px" }}
            >
              <option disabled value="">
                Pick a status
              </option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="DECLINED">Declined</option>
            </select>
          </form>
        </GridItem>
      </Grid>
      <GridContainer>
        <GridItem  xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`My car`}
                height="140"
                image={`title.images[0]`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Benz spare parts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: lorem ipsum dolor sit amet is the description
                  <br />
                  Price: $9,000
                  <br />
                  Merchant: #11174569
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleApprove(title.id)}
              >
                Approve
              </Button>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleDecline(title.id)}
              >
                Decline
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`My car`}
                height="140"
                image={`title.images[0]`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Benz spare parts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: lorem ipsum dolor sit amet is the description
                  <br />
                  Price: $9,000
                  <br />
                  Merchant: #11174569
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleApprove(title.id)}
              >
                Approve
              </Button>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleDecline(title.id)}
              >
                Decline
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`My car`}
                height="140"
                image={`title.images[0]`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Benz spare parts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: lorem ipsum dolor sit amet is the description
                  <br />
                  Price: $9,000
                  <br />
                  Merchant: #11174569
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleApprove(title.id)}
              >
                Approve
              </Button>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleDecline(title.id)}
              >
                Decline
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`My car`}
                height="140"
                image={`title.images[0]`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Benz spare parts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: lorem ipsum dolor sit amet is the description
                  <br />
                  Price: $9,000
                  <br />
                  Merchant: #11174569
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleApprove(title.id)}
              >
                Approve
              </Button>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleDecline(title.id)}
              >
                Decline
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem  xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`My car`}
                height="140"
                image={`title.images[0]`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Benz spare parts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: lorem ipsum dolor sit amet is the description
                  <br />
                  Price: $9,000
                  <br />
                  Merchant: #11174569
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleApprove(title.id)}
              >
                Approve
              </Button>
              <Button
                size="small"
                color="primary"
                // onClick={() => handleDecline(title.id)}
              >
                Decline
              </Button>
            </CardActions>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
          {
            loading ? '...loading' : 
            dealsResult.map((title) => 
              <GridItem xs={12} sm={6} md={4} key={title.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={`${title.title}`}
                      height="140"
                      image={`${title.images[0]}`}
                      title="Contemplative Reptile"
                    />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {title.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Description: {title.description}<br/>
                          Price: {`${'₦'}${title.amount}`}<br/>
                          Merchant: {title.id}
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => handleApprove(title.id)}
                    >
                    Approve
                    </Button>
                    <Button
                    size="small" 
                    color="primary" 
                    onClick={() => handleDecline(title.id)}
                    >
                    Decline
                    </Button>
                  </CardActions>
                </Card>
              </GridItem>
          )}
        </GridContainer> */}
      {/* {decline ? (
          <Modal
            onClick={(e) => e.preventDefault()}
            cancel={true}
            onNullClick={(e) => e.stopPropagation()}
            onClick={() => setDecline(!decline)}
          >
            <form 
            onSubmit={submitDeclineReason}
            >
              <input
              onChange={(e) => setComment(e.target.value)}
              type="text" 
              name="comment" 
              value={comment}
              placeholder="Your Comment here" 
              /><br />
              <button type="submit">Send Comment</button>
            </form>
          </Modal>
        ): ""} */}
      <Grid container spacing={3} style={{ marginTop: 50 }}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <Grid>
                <GridItem xs={12} sm={12} md={12}>
                  <h4
                    className={classes.cardTitleWhite}
                    style={{ postion: "absolute" }}
                  >
                    Recent Activities
                  </h4>
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={12}>2</GridItem> */}
                {/* <GridItem xs={12} sm={12} md={12}>3</GridItem> */}
                <GridItem xs={12} sm={12} md={12}>
                  {/* <input 
                    type="search" 
                    placeholder="Search Here" 
                    style={{padding: "5px 10px", color: "black", fontWeight: "bold", marginBottom: "10px"}} 
                    /> */}
                  <TextField
                    required
                    id="standard-required"
                    label="Make your search here"
                    type="text"
                    placeholder="Make your search here"
                    // value={formValues.image}
                    // onChange={handleChangeForm('image')}
                  />
                </GridItem>
              </Grid>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={[
                  "Deal No",
                  "Date",
                  "Merchant",
                  "Deal Description",
                  "Comment",
                  "address",
                ]}
                // tableData={dealsList}
                tableData={[
                  {
                    id: "01",
                    title: "Bag of Rice",
                    merchantName: "konga stores",
                    state: "50 kg of rice for sale",
                    description: "Price to much",
                    dealer: "From Minna",
                  },
                  {
                    id: "02",
                    title: "Plantain chips",
                    merchantName: "jumia",
                    state: "Re distribution",
                    description: "I Hope this is original",
                    dealer: "Ijebu Ode",
                  },
                  {
                    id: "03",
                    title: "Cars",
                    merchantName: "yakoyo",
                    state: "Car parts for sale",
                    description: "Buying this soon",
                    dealer: "Lagos Mainland",
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}
