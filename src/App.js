import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Cardtop from "./components/Cardtop";
import Card from "./components/Card";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      resp: [],
    };
  }

  async componentDidMount() {
    const req = await fetch("/data.json");
    const data = await req.json();
    console.log(data[3])
    this.setState({
      fetching: false,
      resp: data,
    });
  }

  render() {
    return (
      <div>
        <Nav className="myNav" />
        <main>
          <Banner />

          <Cardtop 
            fetching = {this.state.fetching} 
            data={this.state.resp} 
          />         
          
          <Card 
            fetching = {this.state.fetching} 
            data={this.state.resp} 
          />

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
