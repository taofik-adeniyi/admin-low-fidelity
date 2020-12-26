import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from '@material-ui/core';
// import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Page from '../../components/Page/Page';
import Toolbar from '../../components/Page/Toolbar'
// import Results from '../../components/Results';
import data from '../../components/Page/data';
import Results from '../../components/Page/Results';

// const useStyles = makeStyles(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
export default function Icons() {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
}
