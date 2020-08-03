/**
 *
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName App Component 🥈
 *
 *
 * App component handles the following:
 *
 *  - lazy loads pages/containers
 *  - Handles routing for app
 *  - Provides the app with Material-UI theme instance
 *  - Renders App navigation
 *  - Suspense and loading
 */
import React, { Suspense, lazy } from "react";

import * as ROUTES from "constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoSpinner from "components/library/MoSpinner";
import withStoreInit from "components/shared/Session/withStoreInit";

const Account = lazy(() => import("containers/Account"));
const AdminPage = lazy(() => import("containers/AdminPage"));
const LandingPage = lazy(() => import("containers/Landing"));
const NotFound = lazy(() => import("components/shared/NotFound"));
const PasswordReset = lazy(() => import("containers/PasswordReset"));

const Playground = lazy(() => import("containers/Playground"));
const Collections = lazy(() => import("containers/Collections"));
const SignUp = lazy(() => import("containers/SignUp"));
const SignIn = lazy(() => import("containers/SignIn"));

const App = () => {
  return (
    <Router>
      {/* Page size based on the page */}
      <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
        <Switch>
          <Route path={ROUTES.ADMIN.path} component={AdminPage} />
          <Route path={ROUTES.ACCOUNT.path} component={Account} />
          <Route exact path={ROUTES.LANDING.path} component={LandingPage} />
          <Route exact path={ROUTES.NOT_FOUND.path} component={NotFound} />

          <Route path={ROUTES.SIGN_IN.path} component={SignIn} />
          <Route path={ROUTES.SIGN_UP.path} component={SignUp} />
          <Route path={ROUTES.PASSWORD_FORGET.path} component={PasswordReset} />
          <Route path={ROUTES.PLAYGROUND.path} component={Playground} />
          <Route path={ROUTES.COLLECTIONS.path} component={Collections} />
          <Route path={ROUTES.COMPANIES.path} component={Collections} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default withStoreInit(App);
