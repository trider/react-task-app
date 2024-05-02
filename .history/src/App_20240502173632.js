
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./pages/Login";
import TaskList from "./pages/Task";


let App = () => {
  return (
    <div>
          <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="tasks" element={<TaskList />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
      
      // <LoginForm />
      // <TaskList />


   

    </div>


  );
}


export default App;
