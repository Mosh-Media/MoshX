/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Landing Page 🥇
 *
 *
 * Main page in the app
 *
 */

import React from "react";

import * as ROUTES from "constants/routes";

import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Landing1 from "assets/landing1.png";
import Landing2 from "assets/landing2.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MoButton from "components/library/MoButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/shared/Footer";
import styles from "./styles";
import MoTypography from "components/library/MoTypography";

const LandingPage = ({ classes }) => {
  return (
    <>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <Fade
            in={Landing1 && true}
            mountOnEnter
            timeout={{ enter: 200 }}
            unmountOnExit
          >
            <div className={classes.responsiveGrid}>
              <MoTypography
                color="greyDark"
                font="breeSerif"
                marginBottom="md"
                variant="h2"
              >
                Learn React one step at a time
              </MoTypography>
              <MoTypography
                color="grey"
                font="openSans"
                marginBottom="md"
                variant="h4"
              >
                Study any React topic, anytime. Explore free front-end
                development courses
              </MoTypography>
              <MoButton
                isArrowIcon={true}
                color="primary"
                variant="contained"
                size="large"
                text="View Courses"
                href={ROUTES.COLLECTIONS.path}
              />
            </div>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6} xs={12}>
          <Fade
            in={Landing1 && true}
            mountOnEnter
            timeout={{ enter: 1200 }}
            unmountOnExit
          >
            <img
              alt="Learning MoSkool React Courses"
              src={Landing1}
              className={classes.img}
            />
          </Fade>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        className={classes.container}
        alignItems="center"
      >
        <Fade
          in={Landing2 && true}
          mountOnEnter
          timeout={{ enter: 1200 }}
          unmountOnExit
        >
          <Grid item sm={12} md={6} xs={12} alignItems="center">
            <MoTypography
              color="greyDark"
              font="breeSerif"
              marginBottom="md"
              variant="h2"
            >
              Learn all about React
            </MoTypography>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text="Basic HTML and usage in React"
                href={ROUTES.COLLECTIONS.path + "/#html"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text="Styling components and elements in React"
                href={ROUTES.COLLECTIONS.path + "/#reactStyle"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text="JavaScript functionality in React"
                href={ROUTES.COLLECTIONS.path + "/#reactJsx"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text="React Hooks, Context API, and Redux"
                href={ROUTES.COLLECTIONS.path + "/#reactJsx"}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar className={classes.checkMark}>
                <CheckIcon />
              </ListItemAvatar>
              <MoButton
                isArrowIcon={false}
                color="primary"
                variant="text"
                size="large"
                text="View All Courses"
                href={ROUTES.COLLECTIONS.path}
              />
            </ListItem>
          </Grid>
        </Fade>
        <Fade
          in={Landing1 && true}
          mountOnEnter
          timeout={{ enter: 400 }}
          unmountOnExit
        >
          <Grid item sm={12} md={6} xs={12}>
            <img
              alt="Learn all about React"
              src={Landing2}
              className={classes.img}
            />
          </Grid>
        </Fade>
      </Grid>
      <Grid container spacing={4} className={classes.container}>
        <Grid item sm={12} md={6} xs={12}>
          <MoTypography
            color="greyDark"
            font="breeSerif"
            marginBottom="md"
            variant="h2"
          >
            Try the playground
          </MoTypography>
          <MoTypography
            color="grey"
            font="openSans"
            marginBottom="md"
            variant="h4"
          >
            Write code in JSX and watch it render your code magically.
          </MoTypography>
          <MoButton
            isArrowIcon={true}
            color="primary"
            variant="contained"
            size="large"
            text="Try our playground"
            href={ROUTES.PLAYGROUND.path}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default withStyles(styles)(LandingPage);
