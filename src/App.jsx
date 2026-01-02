import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState(() => {
    return [
      {
        id: '1',
        description: 'Completed task',
        completed: true,
        created: new Date(Date.now() - 17000),
      },
      {
        id: '2',
        description: 'Editing task',
        completed: false,
        created: new Date(Date.now() - 300000),
      },
      {
        id: '3',
        description: 'Active task',
        completed: false,
        created: new Date(Date.now() - 300000),
      },
    ];
  });

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeCount = tasks.filter((task) => !task.completed).length;

  const handleAddTask = (description) => {
    const newTask = {
      id: Date.now().toString(),
      description,
      completed: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    // редактирование будет позже
    console.log('Edit task:', id);
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="todoapp">
      <NewTaskForm onAddTask={handleAddTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
        <Footer
          activeCount={activeCount}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={handleClearCompleted}
        />
      </section>
    </div>
  );
}

export default App;
