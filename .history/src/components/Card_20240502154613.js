import Card from 'react-bootstrap/Card';

const Card = ({ children }) => {
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default Card;