
import './App.css';
import User from './User';
//const User = lazy(() => import('./User'));
import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

function App() {
  const client = new ApolloClient({

    uri: 'https://localhost:4000/graphql',
  
    cache: new InMemoryCache(),
  
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <ErrorBoundary>
      <Router>
        <Routes>
          
          <Route exact path='/' element={<User />}></Route>
          
        </Routes>
      </Router>
      </ErrorBoundary>
      </ApolloProvider>

    </div>
  );
}

export default App;
