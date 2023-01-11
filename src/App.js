
import './App.css';
import User from './User';
// import Newcomponent from './Newcomponent';
// //const User = lazy(() => import('./User'));
// import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
//import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Header from './Header';

//import Mutation from './Mutation';

function App() {
//   const client = new ApolloClient({

//     uri: 'https://flyby-gateway.herokuapp.com/',    
//     cache: new InMemoryCache(),
  
//   });
  

  return (
    <div className="App">
      {/* <h1>hii</h1>
      <ApolloProvider client={client}>
      <ErrorBoundary> */}
      <Router>
        <Routes>
          <Route exact path='/header' element={<Header />}></Route>
          <Route exact path='/' element={<User />}></Route>
          
        </Routes>
      </Router>
      {/* </ErrorBoundary> 
      </ApolloProvider> */}

    </div>
  );
}

export default App;
