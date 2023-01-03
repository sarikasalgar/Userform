
import './App.css';
import User from './User';
//const User = lazy(() => import('./User'));
import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <ErrorBoundary>
      <Router>
        <Routes>
          
          <Route exact path='/' element={<User />}></Route>
          
        </Routes>
      </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
