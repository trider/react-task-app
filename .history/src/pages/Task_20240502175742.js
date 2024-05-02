import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const userTasks= [
 {
   id: "6630ab326e723ac1ea6dce7a",
   description: "My first task",
   name: "A task",
   taskId: 1,
   user: "jonnygold",
   added: "2024-05-01T22:00:00.000Z",
   updated: "2024-05-01T14:16:01.119Z",
   status: "do",
   isActive: true
 },
 {
   id: "6630fe5d6e723ac1ea6dce7e",
   description: "My second task",
   name: "Another task",
   taskId: 2,
   user: "jonnygold",
   added: "2024-05-01T22:00:00.000Z",
   updated:"2024-05-01T14:16:01.119Z",
   status: "doing",
   isActive: true
 },
 {
   id: "6630fe826e723ac1ea6dce7f",
   description: "My task",
   name: "task",
   taskId: 3,
   user: "jonnygold",
   added: "2024-05-01T22:00:00.000Z",
   updated:"2024-05-01T14:16:01.119Z",
   status: "done",
   isActive: true
 },
 {
   id: "6631f17cc4c9b7f5ab3c28c3",
   name: "Yet another task",
   description: "My fourth task",
   user: "jonnygold",
   taskId: 4,
   added: "2024-05-01T22:00:00.000Z",
   updated:"2024-05-01T14:16:01.119Z",
   isActive: true,
   status: "do",

 },
 {
   id: "66323f0d54b80929f84ebdd2",
   user: "jonnygold",
   name: "New Task",
   description: "My new task description",
   status: "do",
   taskId: 5,
   added: "2024-05-01T22:00:00.000Z",
   updated:"2024-05-01T14:16:01.119Z",
   isActive: true,
 }

]

const tableCols = [
  'name',
  'description',
  'added',
  'updated',
  'status',
];



const TaskTable = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {tableCols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userTasks.map((task) => (
          <tr key={task.id}>
            {tableCols.map((col) => (
              <td key={col}>{task[col]}</td>
            ))}
          </tr>
        ))}
         
      </tbody>
    </Table>
      


  
    </div>
  );
}

const NavbarComponent = () => {
  return (
    <Navbar bg="primay" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tasks App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const TaskList = () => {
  return (
    <div>

    <NavbarComponent />
    <Container>

      <h1>Tasks</h1>
      <TaskTable />
    </Container>
    </div>
  );
}

export default TaskList;