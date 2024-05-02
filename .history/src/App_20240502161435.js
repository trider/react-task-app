
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



import LoginForm from "./pages/Login";



let App = () => {
  return (
    <div className='mx-auto p-2' style={{marginTop:'100px',width:'40%'}}>
       <Container fluid>
          <LoginForm />
       </Container>

    </div>


  );
}


export default App;
