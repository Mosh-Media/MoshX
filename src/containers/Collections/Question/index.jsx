/**
 *
 * @author Mo Skool
 * @version 1.0.0
 * @visibleName Question routing component 🚕
 *
 * This component is responsible for routing between question view
 * the first route is a view only mode, where users can answer the question
 * the second route is edit mode, where users can edit and save question details - only authors and admins can do this
 *
 * @returns - routes to components
 *
 * @see Link [Example Question Page](https://moskool.com/courses/mo-easy/1)
 *
 * */

import React, { lazy } from "react";

import * as ROUTES from "constants/routes";
import { Switch, Route } from "react-router-dom";
import { retry } from "helpers/retryLazyImports";

const QuestionViewPage = lazy(() =>
  retry(() => import("containers/Collections/Question/QuestionViewPage"))
);
const QuestionEditPage = lazy(() =>
  retry(() => import("containers/Collections/Question/QuestionEditPage"))
);
const Question = () => (
  <Switch>
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId"}
      component={QuestionViewPage}
    />
    <Route
      exact
      path={ROUTES.COLLECTIONS.path + "/:collection/:questionId/isEditMode"}
      component={QuestionEditPage}
    />
  </Switch>
);

export default Question;
