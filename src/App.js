import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to kisal </h1>
       <button className="users-button" onClick={() => navigate('/users')}>Save</button>
      </header>
    </div>
  );
}

export default App;
