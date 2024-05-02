
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Users from '../data/Users/users.js';

const FormBody = () => {

  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  const [user, setUser] = useState({});

  return (
    <div>
      <Form onSubmit={(e) => { 
        alert('Email: ' + email + '\nPassword: ' + password);''
        setUser(Users.filter(u => u.email === email && u.password === password)[0]);
      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" >Submit</Button>
        </div>
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