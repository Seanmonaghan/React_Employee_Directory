import React from 'react';
import Body from "./components/Body";
import Header from "./components/Header";
import Container from "./components/Container"


function App() {
  return (
    <div>
      <Header />
      <Container>
        <Body />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
