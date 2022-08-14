import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PostCard(props) {
	const { name, price, goalDate, url, explain } = props;

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202206290404'
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>price: {price}</Card.Text>
				<Card.Text>goalDate: {goalDate}</Card.Text>
				<Card.Text>{explain}</Card.Text>
				<Link to={url}>
					<Button variant='primary'>Go to buy it</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default PostCard;
