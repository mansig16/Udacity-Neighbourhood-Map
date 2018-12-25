import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  //function used to load the map
  renderMap = () =>{
    window.initMap = this.initMap
    loadScript("https://maps.googleapis.com/maps/api/js?key=""&callback=initMap");
    
  }


   initMap = () => { 
      var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.7333, lng: 76.7794},
          zoom: 13
        })

      window.mapObject=map;

 }
  
  render() {
    this.renderMap();
    return (
      <main>
      <div className="App">
        <Header/>
        <Content/>
      </div>
      </main>
    )
  }
}

//function used to load the script tag
  function loadScript(url){
      var index = window.document.getElementsByTagName("script")[0]
      var script=window.document.createElement("script")
      script.src=url
      script.async=true
      script.defer=true
      index.parentNode.insertBefore(script,index)
      script.onerror = function () {
      alert("Map script failed to load, the application might not work as expected, check source.");
    };
    }
export default App;
