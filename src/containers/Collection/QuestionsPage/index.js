import React, { useEffect, useState, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";
import MoProgressBar from "../../../components/shared/MoProgressBar";

const QuestionsPage = ({
	authUser,
	isLoading,
	match,
	questions,
	collectionDetails,
}) => {
	const [points, setPoints] = useState(0);
	const calculateProgress = useCallback(() => {
		if (!authUser) {
			return false;
		}
		let numberOfQuestions = questions && questions.length;
		return numberOfQuestions && points
			? Math.round((points / numberOfQuestions) * 100) + "% Complete"
			: "0% Complete";
	}, [authUser, points, questions]);
	useEffect(() => {
		setPoints(authUser?.reports?.[match.params.collection]?.points);
	}, [authUser, match]);

	return (
		<MoPage
			title={collectionDetails?.label}
			isLoading={isLoading}
			Component={() =>
				collectionDetails.isProgressBar && (
					<MoProgressBar
						authUser={authUser}
						points={points}
						progress={calculateProgress()}
					/>
				)
			}
		>
			{questions && (
				<Grid container spacing={4}>
					<QuestionsList
						points={points}
						questions={questions}
						url={match?.params?.collection}
					/>
				</Grid>
			)}
		</MoPage>
	);
};

export default QuestionsPage;
