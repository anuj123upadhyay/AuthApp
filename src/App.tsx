// import React from 'react';
// import { Router } from './routes/Router';

// const App = () => {
//   return (
//     <Router />
//   );
// }

// export default App;
import React from 'react';
import {Router} from './routes/Router';
import {AppwriteProvider} from './appwrite/AppwriteContext';

export default function App() { 
  return ( 
  <> 
  <AppwriteProvider> 
    <Router /> 
  </AppwriteProvider> 
  </> );
   } 