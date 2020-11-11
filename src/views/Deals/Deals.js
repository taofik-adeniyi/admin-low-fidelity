import React, { useState, useEffect } from "react";
import axios from "axios";
import {adminToken, clientId, clientSecret, baseUrl} from "../../enviroment"
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

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  }
};


const useStyles = makeStyles(styles);

export default function Deals() {

  const [loading, setLoading] = useState(true)
  const [dealsList, setDealsList] = useState([]);
  const [decline, setDecline] = useState(false);
  const [commentObj, setCommentObj] = useState({id: 'abc', reason: ''});
  const [status, setStatus] = useState("DECLINED")
  const [dealsNo, setDealsNo] = useState()

  useEffect(() => {
    axios.get(`${baseUrl}/deal`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'crossorigin': true,
        'crossdomain': true,
        'Authorization': `Bearer ${adminToken}`,
        'client-id': clientId,
        'client_secret': clientSecret
      }
    })
      .then(res => {
        setLoading(false)
        setDealsList(res.data.data)
        setDealsNo(res.data.recordsFiltered)
      })
      .catch(err => {
        setLoading(false)
        setDealsList([])
        console.log(err)
      })
  }, [])

  const handleApprove = (deals_id) => {
    
    setCommentObj((prevState) => ({
      ...prevState, id: deals_id
    }))
    
    console.log('after ' + commentObj.id)

    axios.post('/deal/approve', {id: deals_id}, {
      headers: {
      'Authorization': `Bearer ${adminToken}`,
      'client-id': clientId,
      'client_secret': clientSecret
      }
    })
      .then(response => {
        if(response.data){
          alert("The deal as already been approved")
        }
      })
      .catch(error =>  {
        console.log('Error: ' + error)
      })
  }

  const handleDecline = (deals_id) => {
    setDecline(true)
    setCommentObj({'id': `${deals_id}`})
    console.log('lol' + commentObj.id)

    // setCommentObj({...commentObj}, {
    //   id: 23
    //   // reason: 'mad o' 
    // })
  }

  const submitDeclineReason = e => {
    e.preventDefault()

    // setCommentObj({...commentObj}, {
    //   id: 23,
    //   reason: 'mad o' 
    // })

    axios.post('/deal/decline', commentObj, {
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'client-id': 'staging_zHHPqPn.Gp2ZSTkRM81Sksp3Ig0~d1F8..b3dWN3XtTRZS8MYMy28poWD7v6UKQsFptXN15MtxHw9uL59LCfaGVy5LFPFu.j9qnP',
        'client_secret': 'e3B3cDyU-KjI7hL90Bw82rbRuosbSbDv_mEKbdeqde2xW9lOcRWEO7lpMv0VH22RNg3E~7qKJMlMc.WwF9AQLtKYvHu9hy0t7v~T'
      }
    })
    .then(response => {
      if(response.data){
        alert ("Deal has already been Declined")
      }
      setDecline(false)
    })
    .catch(error => {
      console.log('Error: ' + error)
    })
  }
  
  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleSubmit = (e) => {
    setStatus(status)
    console.log(status)
  }

  const dealsResult = dealsList.filter(result => result.status === status)
  
  const classes = useStyles();

  return (
    <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>No of Deals Created</p>
                <h3 className={classes.cardTitle}>
                  {loading? '..loading' : dealsNo}  
                </h3>
              </CardHeader>
              <CardFooter stats>
              
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>No of Pinned Deals</p>
                <h3 className={classes.cardTitle}>500</h3>
              </CardHeader>
              <CardFooter stats>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>No of Claimed Deals</p>
                <h3 className={classes.cardTitle}>25</h3>
              </CardHeader>
              <CardFooter stats>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>No of Expired Deals</p>
                <h3 className={classes.cardTitle}>5000</h3>
              </CardHeader>
              <CardFooter stats>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <div>
          <p>Filter By Status</p>
          <form onSubmit={handleSubmit}>
            <select value={status} onChange={handleStatusChange} style={{padding: '6px'}}>
              <option disabled value="">Pick a status</option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="DECLINED">Declined</option>
            </select>
            <input style={{padding: '5px', outline: 'none', marginLeft: '10px'}} type="submit" value="Submit" />
          </form>
        </div>
        <GridContainer>
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
        </GridContainer>
        {decline ? (
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
              onChange={(e) => setCommentObj({...commentObj, 'reason': e.target.value})}
              type="text" 
              name="comment" 
              value={commentObj.reason} 
              placeholder="Your Comment here" 
              /><br />
              <button type="submit">Send Comment</button>
            </form>
          </Modal>
        ): ""}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Recent Activities Showing all deals</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Deal No", "Date", "Merchant", "Deal Description", "Comment", "address"]}
                tableData={dealsList}
              />
            </CardBody>
          </Card>
        </GridItem>
    </GridContainer>
    </div>
  );
}
