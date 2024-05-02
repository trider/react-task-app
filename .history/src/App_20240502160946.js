
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



import LoginForm from "./pages/Login";



let App = () => {
  return (
    <div>
       <Container fluid className='container-lg d-lg-flex'>
          <LoginForm />
       </Container>

    </div>


  );
}


export default App;
