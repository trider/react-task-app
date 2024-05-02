
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const FormBody = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" c>
          Submit
        </Button>
      </Form>
    </div>
  );

}



const LoginForm = () => {
  return (
    <div>
      <Container fluid className='container-lg' style={{ marginTop: '100px', width: '40%' }}>
        <Card className='card-sm'>
          <Card.Header className='bg-primary text-light text-center' >
            <h2>Login</h2>
          </Card.Header>
          <Card.Body>
            <FormBody />

          </Card.Body>
        </Card>

      </Container>
    </div>





  );
}

export default LoginForm;