/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Admin container page 🎒
 *
 * Admin page grabs a list of courses from firebase and routes
 * admin users to the admin sub pages (users and collections)
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Class} history - Firebase class provides access to authUser and db
 * @withAuthorization - HOC wraps around components and prevents render based on a condition - firebase and match props - EXAMPLE USAGE: withAuthorization(condition)(Component)
 * @withEmailVerification - HOC provides email verification stuff
 * @returns - returns a lesson list on the left column and course tracking info on the right column
 */

import React, { Suspense, lazy } from "react";

import * as ROLES from "constants/roles";
import * as ROUTES from "constants/routes";
import { compose } from "recompose";
import { Switch, Route } from "react-router-dom";
import MoPage from "components/library/MoPage";
import MoSpinner from "components/library/MoSpinner";
import { UserList } from "components/shared/Users";
import { UserItem } from "components/shared/Users";
import useCollections from "hooks/useCollections";
import {
	withAuthorization,
	withEmailVerification,
	withAuthentication,
} from "components/shared/Session";

const AdminNav = lazy(() => import("./AdminNav"));
const Collection = lazy(() => import("./Collection"));

const AdminPage = ({ firebase, history }) => {
	const courses = useCollections("courses", firebase);
	return (
		<MoPage title="Admin" isLoading={false}>
			<AdminNav courses={courses} history={history} />
			<Suspense
				fallback={<MoSpinner isLoading={true} color="primary" />}
			></Suspense>
			<Switch>
				<Route
					exact
					path={ROUTES.ADMIN_COLLECTIONS.path + "/:collection"}
					component={Collection}
				/>
				<Route exact path={ROUTES.ADMIN_DETAILS.path} component={UserList} />
				<Route exact path={ROUTES.ADMIN_USERS.path} component={UserList} />
				<Route
					exact
					path={ROUTES.ADMIN_USERS.path + "/:id"}
					component={UserItem}
				/>
			</Switch>
		</MoPage>
	);
};

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
	withEmailVerification,
	withAuthentication,
	withAuthorization(condition)
)(AdminPage);