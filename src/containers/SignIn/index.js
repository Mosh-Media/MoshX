import React from "react";

import { AuthUserContext } from "../../components/Session";
import Grid from "@material-ui/core/Grid";
import MoPage from "../../components/shared/MoPage";
import SocialSignIn from "../../components/SocialSignIn/";
import SignInForm from "./SignInForm";

const SignInPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<MoPage
				img=""
				title={authUser ? "You are logged in 👍" : "Welcome Back 🤩"}
				loading={false}
			>
				<Grid container spacing={3}>
					{authUser ? (
						""
					) : (
						<>
							<SignInForm />
							<SocialSignIn />
						</>
					)}
				</Grid>
			</MoPage>
		)}
	</AuthUserContext.Consumer>
);

export default SignInPage;
