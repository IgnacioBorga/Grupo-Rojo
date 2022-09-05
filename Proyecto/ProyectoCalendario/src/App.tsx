import './styles/App.css';
import Logo from './components/Logo';
import './styles/Normalize.css';
import EventList from './components/EventList';

function App() {

  return (
    <div className="App">
      <Logo/>
      <div className="todo-main">
        <h1 className="tittle">Crear nuevo evento</h1>

        <EventList />
      </div>
    </div>
  );
}

export default App;
