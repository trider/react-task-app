
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";


let App = () => {
  return (
    <div>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      <LoginForm />
      <TaskList />


   

    </div>


  );
}


export default App;
