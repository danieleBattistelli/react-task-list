import tasks from "./data/data";

function App() {

  const TaskManager = () => {
    const completedTask = tasks.filter(task => task.state === 'completed');
    const currentTask = tasks.filter(task => task.state !== 'completed');
    return (
      <div>
        <h1 >Task Manager </h1>
        <div>
          <h2>Current Tasks ({currentTask.length})</h2>
          <ul>
            {currentTask.map(task =>
              <li key={task.id}>
                <strong>{task.title}</strong> <span className={`state ${task.state}`}>{task.state}</span><br />
                Priority: {task.priority} <br />
                Est. Time {task.estimatedTime} <br />
              </li>)
            }
          </ul>
        </div>
        <div>
          <h2>Completed  Tasks ({completedTask.length})</h2>
          <ul>
            {completedTask.map(task =>
              <li key={task.id}>
                <strong>{task.title}</strong> <strong className={`state ${task.state}`}>{task.state}</strong><br />
                Priority: {task.priority} <br />
                Est. Time {task.estimatedTime} <br />
              </li>)
            }
          </ul>
        </div>
      </div>
    );
  };

  console.log(tasks);

  return (
    <>
      {TaskManager()}
    </>
  )
}

export default App
