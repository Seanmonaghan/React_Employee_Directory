import React from 'react';
import Body from "./components/Body";
import Header from "./components/Header";
import Container from "./components/Container"
import { BasicTable } from "./components/BasicTable"


function App() {
  return (
    <div>
      
      <Header />
      <BasicTable />


      {<Header />
      /* <Container>

        <Body />
      </Container>
      <Footer /> */}
    </div>
  );
}

export default App;
