/**
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName Collections routing component 🚕
 *
 * Handles routing between Courses, Questions and Question
 * @returns - routes to components
 *
 * @see Link [Example Courses View Page](https://moskool.com/courses)
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";
import { retry } from "helpers/retryLazyImports";

const Courses = lazy(() =>
  retry(() => import("containers/Collections/Courses"))
);

const Questions = lazy(() =>
  retry(() => import("containers/Collections/Questions"))
);

const Question = lazy(() =>
  retry(() => import("containers/Collections/Question"))
);

const Collections = () => (
  <Switch>
    <Route exact path={ROUTES.COLLECTIONS.path} component={Courses} />
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection"}
      component={Questions}
    />
    <Route
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
      component={Question}
    />
  </Switch>
);

export default Collections;
