import Table from 'react-bootstrap/Table';

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

const TaskList = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      


      {userTasks.map((task) => (
        <div key={task.id}>
          <h1>{task.name}</h1>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;