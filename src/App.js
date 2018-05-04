import React, { Component } from 'react';
import Header from "./containers/Header"; 
import Body from "./containers/Body";
import Footer from "./containers/Footer";
import SlideBar from "./containers/SlideBar";
import Sockets from "./Sockets";

export default class App extends Component {

  componentDidMount() {
    Sockets();
  }

  render() {
    return (
      <div>        
        <Header/>
        <SlideBar/>
        <Body/>
        <Footer/>        
      </div>
    );
  }
}