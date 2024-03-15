import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div({
	margin: "12rem 0px 4rem 0px",
	textAlign: "center",
});

const Error = styled.h1({
	fontSize: "5rem",
	paddingBottom: "1.8rem",
	color: "gray",
});

const Paragraph = styled.p({
	fontSize: "1.2rem",
	paddingBottom: "1.5rem",
});

const Button = styled.button`
	padding: 6px 14px;
	background: #ed017f;
	font-size: 1.2rem;
	border: 2px solid transparent;
	border-radius: 10px;
	color: #ffffff;
	box-shadow: 3px 3px 2px 0px #0a2640;
	cursor: pointer;
	transition: 0.4s ease-out;

	&:hover {
		background: transparent;
		border: 2px solid #ed017f;
		box-shadow: 3px 3px 2px 0px #ed017f;
		color: #0a2640;
	}
`;

const PageNotFound = () => {
	return (
		<>
			<Main>
				<Error>404</Error>
				<Paragraph>You have discovered a secret place</Paragraph>
				<Paragraph>
					Unfortunately, this is only a 404 page. You may have mistyped the
					address, <br /> or the page have been move to another URL.
				</Paragraph>
				<Link to='/'>
					<Button>Go back to the Home page</Button>
				</Link>
			</Main>
		</>
	);
};

export default PageNotFound;
