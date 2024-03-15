import Styles from "/src/Components/Disco Community/DiscoCommun.module.css";
import styled from "styled-components";
import Team from "/src/assets/Images/developers.jpeg";
import Disco_Button from "../../UI/Buttons/Disco_Button";
import { Link } from "react-router-dom";
import "animate.css";

const Title = styled.h1`
	font-size: 2.4rem;
	texttransform: uppercase;
	color: #0a2640;
	padding-bottom: 5%;

	@media screen and (max-width: 767px) {
		font-size: 2rem;
	}
`;

const Disco_comm = () => {
	return (
		<>
			<div className={Styles.disco_community}>
				<div className={Styles.disco_commun_wirpper}>
					<div
						className={`${Styles.disco_commun_content} animate__animated  animate__fadeIn`}
					>
						<Title>Disco community</Title>
						<p className={Styles.description}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
							in. Consequuntur consequatur dicta, odio quos sint minima
							aspernatur perferendis quidem, quisquam culpa rerum expedita
							voluptatum fuga vel eos autem ab. Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Commodi, voluptas.
						</p>
						<Link to='/account_opt'>
							<Disco_Button />
						</Link>
					</div>

					<div
						className={`${Styles.disco_commun_content} ${Styles.disco_commun_content2} animate__animated  animate__flipInY`}
					>
						<img src={Team} alt='Team' className={Styles.img} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Disco_comm;
