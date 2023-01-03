
import './App.css';
import User from './User';
//const User = lazy(() => import('./User'));
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<User />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
