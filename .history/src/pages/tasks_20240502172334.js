const Tasks = [
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
     <h1>Tasks</h1>
     <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>Description</th>
           <th>Status</th>
         </tr>
       </thead>
       <tbody>
         {Tasks.map((task, index) => (
           <tr key={task.taskId}>
             <td>{index + 1}</td>
             <td>{task.name}</td>
             <td>{task.description}</td>
             <td>{task.status}</td>
           </tr>
         ))}
       </tbody>
     </Table>
   </div>
 )
}

export default TaskList;