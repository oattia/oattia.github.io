import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const InfoCard = () => {
	const extra = (
		<div>
			<a href='https://www.linkedin.com/in/chufeng-hu-545022114/'>
				<Button icon='linkedin' size='small' color='linkedin' circular/>
			</a>
			<a href='https://github.com/ChesterHu' >
				<Button icon='github' size='small' color='github' circular/>
			</a>
			<a href='https://www.facebook.com/profile.php?id=100009987228975' >
				<Button icon='facebook' size='small' color='facebook' circular/>
			</a>
		</div>
	)
	return (
		<Card
			centered
			size='small'>
			<Image src={require('../images/my-photo.jpg')} />
			<Card.Content>
				<Card.Header>Chufeng Hu</Card.Header>
				<Card.Meta>University of Waterloo</Card.Meta>
				<Card.Description>
					I'm graduate student in computer science, I love math and coding.
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				{extra}
			</Card.Content>
		</Card>
	);
}

export default InfoCard;
