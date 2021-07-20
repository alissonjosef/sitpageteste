import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component {

  render() {
    return (
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
    );
  }
}


/* function App() {
  return (
 <h1>Alisson Silva</h1>
  );
}

export default App; */