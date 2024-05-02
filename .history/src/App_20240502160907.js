
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



import LoginForm from "./pages/Login";



let App = () => {
  return (
    <div style={{padding:"140px"}}>
       <Container fluid className='container-fluid container-lg d-lg-flex'>
          <LoginForm />
       </Container>

    </div>


  );
}


export default App;
