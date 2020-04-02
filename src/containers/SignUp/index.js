import React from "react";

import { AuthUserContext } from "../../components/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "../../components/shared/MoPage";
import SocialSignIn from "../../components/SocialSignIn/";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <MoPage
        img=""
        title={authUser ? "You are signed up 👍" : "Sign up to get started 😎"}
        loading={false}
      >
        <Grid container spacing={3}>
          {authUser ? (
            ""
          ) : (
            <>
              <SignUpForm />
              <SocialSignIn />
            </>
          )}
        </Grid>
      </MoPage>
    )}
  </AuthUserContext.Consumer>
);

export default SignUpPage;
