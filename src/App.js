import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import { SortingTable } from "./components/SortingTable"

function App() {
  return (
    <div>
      <Header />
      <SortingTable />
      <Footer />
    </div>
  );
}

export default App;
