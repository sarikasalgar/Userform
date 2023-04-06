
import './App.css';
import User from './User';
import Userform from './Userform';
import Usertable from './Usertable';
// import Newcomponent from './Newcomponent';
// //const User = lazy(() => import('./User'));
// import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
//import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Header from './Header';
import Sidenav from './Sidenav';
import Showemployee from './Showemployee';
import Showstudent from './Showstudent';

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
          <Route exact path='/Header' element={<Header />}></Route>
          <Route exact path='/' element={<User />}></Route>
          
          <Route exact path='/Userform' element={<Userform />}></Route>
          <Route exact path='/Usertable' element={<Usertable />}></Route>
          <Route exact path='/Showemployee' element={<Showemployee />}></Route>
          <Route exact path='/Showstudent' element={<Showstudent />}></Route>

          
        </Routes>
      </Router>
      {/* </ErrorBoundary> 
      </ApolloProvider> */}

    </div>
  );
}

export default App;
