import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import { SortingTable } from "./components/SortingTable"
import API from "../src/utils/API"

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    API.getData()
    .then(({data:{results}}) => {
      let users = results.map(user => {
        return {
          id: user.id.value || "N/A",
          first_name: user.name.first,
          last_name: user.name.last,
          date_of_birth: user.dob.date,
          email: user.email,
          phone: user.phone
        }
      })
      this.setState({users})
    })
  }

  render() {

  return (
    <div>
      <Header />
      <SortingTable 
      data = {this.state.users} />
      <Footer />
    </div>
  );
  }
}

export default App;
