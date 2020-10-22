import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './containers/topbar'
import { Main, Login } from './components/'


function App() {
  React.useEffect(() => {
    fetch('/api/v2/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        debugger;
      })
      .catch(e => {
        console.log("Oops, error", e);
        debugger;
      })
  })

  return (
    <div>
      <header className="wrapper">
        <Topbar />
      </header>
      <Login />
    </div>
  );
}

export default App;
