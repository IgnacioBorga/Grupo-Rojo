import './styles/App.css';
import Logo from './components/logo';
import './styles/Normalize.css';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <Logo/>
      <div className="todo-main">
        <h1 className="tittle">Mis Tareas</h1>

        <TodoList />
      </div>
    </div>
  );
}

export default App;
